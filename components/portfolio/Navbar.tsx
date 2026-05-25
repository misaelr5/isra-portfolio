"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/services" },
  { label: "Sobre Nosotros", href: "/about" },
  { label: "Formación", href: "/academics" },
  { label: "Proyectos", href: "/projects" },
  { label: "Resumen", href: "/resume" },
  { label: "Contacto", href: "/contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar-enter fixed left-0 z-50 w-full px-4 text-navy transition-all duration-300 md:px-8 ${
        isScrolled ? "top-3 md:top-4" : "top-0 border-b border-line bg-sand/95 py-4 backdrop-blur-xl"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-8 transition-all duration-300 ${
          isScrolled
            ? "max-w-6xl rounded-xl border border-white/40 bg-sand/75 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,32,0.16)] backdrop-blur-2xl md:px-6"
            : "max-w-7xl"
        }`}
      >
        <Link aria-label="ISRA - Inicio" className="brand-logo-link" href="/">
          <span className="brand-logo brand-logo--nav" aria-hidden="true" />
          <span className="sr-only">ISRA</span>
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-4 md:gap-8">
          {navItems.map((item) => {
            const active = !item.href.includes("#") && pathname === item.href;

            return (
              <Link
                key={item.label}
                className={`nav-link relative pb-1 text-sm font-medium transition-colors hover:text-orange ${
                  active ? "is-active text-navy" : "text-navy/70"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
