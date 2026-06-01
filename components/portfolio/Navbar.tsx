"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { defaultWhatsAppHref } from "@/lib/site";
import { buttonHover, motionEase, navScroll } from "@/components/portfolio/motion";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/services" },
  { label: "Nosotros", href: "/about" },
  { label: "Proyectos", href: "/projects" },
  { label: "Contacto", href: "/contact" }
];

function NavLink({ label, href, active }: { label: string; href: string; active: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <Link
      className={`nav-link relative pb-1 text-sm font-medium transition-colors hover:text-orange ${
        active ? "is-active text-navy" : "text-navy/70"
      }`}
      href={href}
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-orange"
        initial={false}
        animate={reduceMotion ? { scaleX: active ? 1 : 0 } : { scaleX: active ? 1 : 0 }}
        whileHover={reduceMotion ? undefined : { scaleX: 1 }}
        transition={{ duration: 0.28, ease: motionEase }}
      />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      animate={isScrolled ? "scrolled" : "top"}
      className="navbar-enter fixed left-0 top-4 z-50 w-full px-4 text-navy md:px-8"
      initial={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.3, ease: motionEase }}
      variants={navScroll}
    >
      <motion.div
        className={`liquid-navbar mx-auto flex items-center justify-between gap-4 rounded-xl px-4 py-3 md:px-6 ${
          isScrolled
            ? "liquid-navbar--scrolled max-w-6xl border border-line/65 bg-[#f3ede4]/62"
            : "liquid-navbar--top max-w-7xl border border-transparent bg-transparent shadow-none"
        }`}
        transition={{ duration: 0.55, ease: motionEase }}
      >
        <Link aria-label="ISRA - Inicio" className="brand-logo-link shrink-0" href="/">
          <span className="brand-logo brand-logo--nav" aria-hidden="true" />
          <span className="sr-only">ISRA</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} active={pathname === item.href} href={item.href} label={item.label} />
          ))}
          <motion.a
            className="rounded-md bg-orange px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#e04a10]"
            href={defaultWhatsAppHref}
            rel="noreferrer"
            target="_blank"
            {...buttonHover}
          >
            Cotizar
          </motion.a>
        </nav>

        <motion.button
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className={`grid h-11 w-11 place-items-center rounded-lg border text-navy lg:hidden ${
            isScrolled ? "border-line bg-white/80" : "border-transparent bg-white/35"
          }`}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          {...buttonHover}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </motion.div>

      <motion.div
        className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
        aria-hidden={!menuOpen}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
        initial={false}
        transition={{ duration: 0.2, ease: motionEase }}
        onClick={() => setMenuOpen(false)}
      />

      <motion.nav
        id="mobile-nav"
        aria-label="Menú móvil"
        className="fixed right-0 top-0 z-50 flex h-full w-[min(88vw,320px)] flex-col gap-1 border-l border-line bg-sand px-5 pb-8 pt-24 shadow-2xl lg:hidden"
        animate={{ x: menuOpen ? 0 : "100%" }}
        initial={false}
        transition={{ duration: 0.3, ease: motionEase }}
      >
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.label}
              className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                active ? "bg-orange/10 text-orange" : "text-navy/80 hover:bg-white/60"
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
        <motion.a
          className="mt-4 inline-flex items-center justify-center rounded-md bg-orange px-4 py-3 font-semibold text-white"
          href={defaultWhatsAppHref}
          rel="noreferrer"
          target="_blank"
          {...buttonHover}
        >
          Cotizar por WhatsApp
        </motion.a>
      </motion.nav>
    </motion.header>
  );
}
