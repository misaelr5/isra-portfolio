"use client";

import { FileText, Github, Linkedin, Mail, MapPin, MessageSquare, Send, Twitter, User, Workflow } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { AnimatedSubtitle } from "@/components/portfolio/AnimatedSubtitle";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [error, setError] = useState("");

  function updateField(field: keyof ContactForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

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

    const body = [`Nombre: ${name}`, `Email: ${email}`, "", "Mensaje:", message].join("\n");
    const mailto = `mailto:ledesma.rme@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <main className="bg-page text-navy">
      <section className="section-top section-padding">
        <Reveal className="container-shell">
          <SectionIntro
            badge="Contacto"
            title="Hablemos de tu proyecto"
            subtitle="¿Tenés una idea, una web para mejorar o necesitás una solución digital? Escribinos y contanos qué querés construir."
          />
          <div className="mt-10 max-w-3xl">
            <AnimatedSubtitle
              className="text-lg font-semibold text-navy"
              text="Tu mensaje es el primer paso para una web con más movimiento y personalidad."
            />
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-24">
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] contact-top-grid">
          <aside className="space-y-6">
            <article className="glass-panel p-6">
              <h2 className="text-xl font-bold text-navy">Información de contacto</h2>
              <div className="my-6 h-px bg-line" />
              <div className="grid gap-4">
                <a className="contact-info-link" href="mailto:ledesma.rme@gmail.com">
                  <span className="icon-shell">
                    <Mail size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="mt-1 text-sm text-muted">ledesma.rme@gmail.com</p>
                  </div>
                </a>
                <a className="contact-info-link" href="https://maps.google.com/?q=Córdoba,Argentina" target="_blank" rel="noreferrer">
                  <span className="icon-shell">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold">Ubicación</h3>
                    <p className="mt-1 text-sm text-muted">Córdoba, Argentina</p>
                  </div>
                </a>
                <div className="contact-info-link">
                  <span className="icon-shell">
                    <Workflow size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold">Proyecto</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      Desarrollo web, apps web, sistemas, e-commerce y módulos personalizados.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold text-navy">Seguinos</h3>
                <div className="social-icons mt-4">
                  <a className="social-icon" href="https://github.com/oxBinaryBrain/" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a className="social-icon" href="https://www.linkedin.com/in/uday-g-601ba9266/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a className="social-icon" href="https://x.com/UdayG6389896490" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </article>

            <article className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-navy">Tiempo de respuesta</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Generalmente respondo dentro de las primeras 24 horas hábiles. Contanos tu proyecto y te devuelvo una propuesta clara.
              </p>
            </article>
          </aside>

          <form className="rounded-2xl border border-line bg-white p-6 shadow-[0_18px_44px_rgba(15,23,32,0.1)] md:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Tu nombre
                <span className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" size={18} />
                  <input
                    className="w-full rounded-xl border border-line bg-[#F3EDE4] px-4 py-3 pl-11 text-navy placeholder:text-faint focus:border-orange focus:outline-none"
                    placeholder="Juan Pérez"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                  />
                </span>
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <span className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" size={18} />
                  <input
                    className="w-full rounded-xl border border-line bg-[#F3EDE4] px-4 py-3 pl-11 text-navy placeholder:text-faint focus:border-orange focus:outline-none"
                    placeholder="vos@ejemplo.com"
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                  />
                </span>
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Asunto
              <span className="relative">
                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" size={18} />
                <input
                  className="w-full rounded-xl border border-line bg-[#F3EDE4] px-4 py-3 pl-11 text-navy placeholder:text-faint focus:border-orange focus:outline-none"
                  placeholder="Consulta por proyecto / Web / Sistema / E-commerce..."
                  value={form.subject}
                  onChange={(event) => updateField("subject", event.target.value)}
                />
              </span>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Mensaje
              <span className="relative">
                <MessageSquare className="absolute left-4 top-4 text-faint" size={18} />
                <textarea
                  className="min-h-44 w-full resize-none rounded-xl border border-line bg-[#F3EDE4] px-4 py-3 pl-11 text-navy placeholder:text-faint focus:border-orange focus:outline-none"
                  placeholder="Contanos un poco más sobre tu proyecto, los tiempos que manejás y qué querés lograr..."
                  rows={6}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                />
              </span>
            </label>

            {error ? <p className="mt-4 rounded-xl border border-orange/25 bg-orange/10 px-4 py-3 text-sm font-medium text-orange">{error}</p> : null}

            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange py-3 font-semibold text-white transition hover:bg-[#e04a10]" type="submit">
              <Send size={18} />
              Enviar mensaje
            </button>
            <p className="mt-4 text-center text-xs text-faint">Tu información se usa solo para responder tu consulta.</p>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
