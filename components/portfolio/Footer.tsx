"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { defaultWhatsAppHref, siteConfig } from "@/lib/site";
import { buttonHover, fadeUp, motionEase } from "@/components/portfolio/motion";

const socialLinks = [
  { label: "GitHub", icon: Github, href: siteConfig.social.github },
  { label: "WhatsApp", icon: MessageCircle, href: defaultWhatsAppHref },
  { label: "Email", icon: Mail, href: `mailto:${siteConfig.email}` }
] as const;

export function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.footer
        className="border-t border-line bg-sand px-4 py-10 text-navy md:px-8"
        initial="hidden"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.15 }}
        whileInView="visible"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <Link aria-label="ISRA - Inicio" className="brand-logo-link" href="/">
                <span className="brand-logo brand-logo--footer" aria-hidden="true" />
                <span className="sr-only">ISRA</span>
              </Link>
              <p className="mt-4 leading-7 text-muted">{siteConfig.description}</p>
            </div>
            <div className="md:text-right">
              <h2 className="font-semibold text-navy">Contactanos</h2>
              <div className="mt-4 flex gap-3 md:justify-end">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  const external = link.href.startsWith("http");
                  return (
                    <motion.a
                      key={link.label}
                      aria-label={link.label}
                      className="social-icon grid h-11 w-11 place-items-center rounded-md border border-line bg-sand text-navy transition-colors hover:border-orange hover:bg-orange hover:text-white"
                      href={link.href}
                      rel={external ? "noreferrer" : undefined}
                      target={external ? "_blank" : undefined}
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ duration: 0.28, ease: motionEase }}
                    >
                      <Icon size={19} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="mt-10 border-t border-line pt-8 text-center text-sm text-faint">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </motion.footer>
      <motion.button
        aria-label="Volver arriba"
        className="scroll-top-button no-magnetic fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-md bg-orange text-white shadow-lg transition-all"
        type="button"
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        initial={false}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        transition={{ duration: 0.28, ease: motionEase }}
        {...buttonHover}
      >
        <ArrowUp size={22} />
      </motion.button>
    </>
  );
}
