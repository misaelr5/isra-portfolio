"use client";

import { ArrowUp, Github, Mail, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const socialLinks = [
  { label: "GitHub", icon: Github, href: "https://github.com/misaelr5" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/543544434403" },
  { label: "Email", icon: Mail, href: "mailto:ledesma.rme@gmail.com" }
];

export function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="border-t border-line bg-sand px-4 py-10 text-navy md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <a aria-label="ISRA - Inicio" className="brand-logo-link" href="/">
                <span className="brand-logo brand-logo--footer" aria-hidden="true" />
                <span className="sr-only">ISRA</span>
              </a>
              <p className="mt-4 leading-7 text-muted">
                Construimos soluciones digitales innovadoras con foco en código limpio, eficiente y experiencias de usuario cuidadas.
              </p>
            </div>
            <div className="md:text-right">
              <h2 className="font-semibold text-navy">Contactanos</h2>
              <div className="mt-4 flex gap-3 md:justify-end">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      aria-label={link.label}
                      className="social-icon grid h-11 w-11 place-items-center rounded-md border border-line bg-sand text-navy transition-colors hover:border-orange hover:bg-orange hover:text-white"
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="mt-10 border-t border-line pt-8 text-center text-sm text-faint">© 2026 ISRA. Todos los derechos reservados.</p>
        </div>
      </footer>
      <button
        aria-label="Volver arriba"
        className={`scroll-top-button no-magnetic fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-md bg-orange text-white shadow-lg transition-all ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
