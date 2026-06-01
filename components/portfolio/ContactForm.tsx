"use client";

import { CheckCircle2, FileText, Github, Instagram, Loader2, Mail, MapPin, MessageSquare, Send, User, Workflow } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const initialForm: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: ""
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mailtoFallback(form: ContactFormState) {
  const body = [`Nombre: ${form.name}`, `Email: ${form.email}`, "", "Mensaje:", form.message].join("\n");
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function updateField(field: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !subject || !message) {
      setError("Completá nombre, email, asunto y mensaje para enviar la consulta.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Ingresá un email válido para que podamos responderte.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, website: form.website })
      });

      if (response.ok) {
        setStatus("success");
        setForm(initialForm);
        return;
      }

      const data = (await response.json().catch(() => null)) as { error?: string; fallback?: string } | null;

      if (response.status === 503 && data?.fallback === "mailto") {
        window.location.href = mailtoFallback({ ...form, name, email, subject, message });
        setStatus("idle");
        return;
      }

      setStatus("idle");
      setError("No pudimos enviar el mensaje ahora. Probá por WhatsApp o email directo.");
    } catch {
      setStatus("idle");
      setError("Error de conexión. Probá de nuevo o escribinos por WhatsApp.");
    }
  }

  return (
    <div className="contact-top-grid grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
      <aside className="space-y-4 md:space-y-6">
        <article className="glass-panel service-panel-card p-5 md:p-6">
          <h2 className="text-xl font-bold text-navy">Información de contacto</h2>
          <div className="my-6 h-px bg-line" />
          <div className="grid gap-4">
            <a className="contact-info-link" href={`mailto:${siteConfig.email}`}>
              <span className="icon-shell">
                <Mail size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="mt-1 text-sm text-muted">{siteConfig.email}</p>
              </div>
            </a>
            <a
              className="contact-info-link"
              href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.location)}`}
              rel="noreferrer"
              target="_blank"
            >
              <span className="icon-shell">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold">Ubicación</h3>
                <p className="mt-1 text-sm text-muted">{siteConfig.location}</p>
              </div>
            </a>
            <div className="contact-info-link">
              <span className="icon-shell">
                <Workflow size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold">Proyectos</h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Desarrollo web, apps, e-commerce, sistemas y módulos personalizados.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold text-navy">Contacto</h3>
            <div className="social-icons mt-4">
              <a className="social-icon" href={siteConfig.social.github} rel="noreferrer" target="_blank" aria-label="GitHub de ISRA">
                <Github size={18} />
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/misael.lds/"
                rel="noreferrer"
                target="_blank"
                aria-label="Instagram de ISRA"
              >
                <Instagram size={18} />
              </a>
              <a
                className="social-icon"
                href={`https://wa.me/${siteConfig.whatsapp}`}
                rel="noreferrer"
                target="_blank"
                aria-label="WhatsApp de ISRA"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
        </article>

        <article className="glass-panel service-panel-card p-5 md:p-6">
          <h3 className="text-lg font-semibold text-navy">Tiempo de respuesta</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Respondemos en las primeras 24 horas hábiles. Contanos tu proyecto y te devolvemos una propuesta clara.
          </p>
        </article>
      </aside>

      {status === "success" ? (
        <div className="service-panel-card rounded-2xl border border-line bg-white p-6 text-center shadow-[0_18px_44px_rgba(15,23,32,0.1)] md:p-12">
          <CheckCircle2 className="mx-auto text-teal" size={48} aria-hidden="true" />
          <h2 className="mt-6 text-2xl font-bold text-navy">Mensaje enviado</h2>
          <p className="mt-4 leading-8 text-muted">Gracias por escribirnos. Te respondemos a la brevedad al email que indicaste.</p>
          <button
            className="mt-8 rounded-md bg-orange px-6 py-3 font-semibold text-white transition hover:bg-[#e04a10]"
            type="button"
            onClick={() => setStatus("idle")}
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form
          className="service-panel-card rounded-2xl border border-line bg-white p-6 shadow-[0_18px_44px_rgba(15,23,32,0.1)] md:p-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            autoComplete="off"
            className="hidden"
            name="website"
            tabIndex={-1}
            value={form.website}
            onChange={(event) => updateField("website", event.target.value)}
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="grid gap-2 text-sm font-semibold">
              <label htmlFor="contact-name">Tu nombre</label>
              <span className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" size={18} aria-hidden="true" />
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  disabled={status === "loading"}
                  className="w-full rounded-xl border border-line bg-[#F3EDE4] px-4 py-3 pl-11 text-navy placeholder:text-faint focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30 disabled:opacity-60"
                  placeholder="Juan Pérez"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                />
              </span>
            </div>
            <div className="grid gap-2 text-sm font-semibold">
              <label htmlFor="contact-email">Email</label>
              <span className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" size={18} aria-hidden="true" />
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  disabled={status === "loading"}
                  className="w-full rounded-xl border border-line bg-[#F3EDE4] px-4 py-3 pl-11 text-navy placeholder:text-faint focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30 disabled:opacity-60"
                  placeholder="vos@ejemplo.com"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </span>
            </div>
          </div>

          <div className="mt-5 grid gap-2 text-sm font-semibold">
            <label htmlFor="contact-subject">Asunto</label>
            <span className="relative">
              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" size={18} aria-hidden="true" />
              <input
                id="contact-subject"
                name="subject"
                disabled={status === "loading"}
                className="w-full rounded-xl border border-line bg-[#F3EDE4] px-4 py-3 pl-11 text-navy placeholder:text-faint focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30 disabled:opacity-60"
                placeholder="Consulta por web / sistema / e-commerce..."
                value={form.subject}
                onChange={(event) => updateField("subject", event.target.value)}
              />
            </span>
          </div>

          <div className="mt-5 grid gap-2 text-sm font-semibold">
            <label htmlFor="contact-message">Mensaje</label>
            <span className="relative">
              <MessageSquare className="absolute left-4 top-4 text-faint" size={18} aria-hidden="true" />
              <textarea
                id="contact-message"
                name="message"
                disabled={status === "loading"}
                className="min-h-44 w-full resize-none rounded-xl border border-line bg-[#F3EDE4] px-4 py-3 pl-11 text-navy placeholder:text-faint focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30 disabled:opacity-60"
                placeholder="Contanos tu proyecto, plazos y qué querés lograr..."
                rows={6}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
              />
            </span>
          </div>

          {error ? (
            <p className="mt-4 rounded-xl border border-orange/25 bg-orange/10 px-4 py-3 text-sm font-medium text-orange" role="alert">
              {error}
            </p>
          ) : null}

          <button
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange py-3 font-semibold text-white transition hover:bg-[#e04a10] focus:outline-none focus:ring-2 focus:ring-orange/40 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? <Loader2 className="animate-spin" size={18} aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>
          <p className="mt-4 text-center text-xs text-faint">
            Envío por email seguro. Si el servidor no está configurado, se abre tu cliente de correo como respaldo.
          </p>
        </form>
      )}
    </div>
  );
}
