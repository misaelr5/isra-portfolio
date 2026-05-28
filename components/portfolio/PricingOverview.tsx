"use client";

import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/portfolio/Reveal";
import { allServices, pricingDisclaimer } from "@/lib/services";
import { whatsappCta } from "@/lib/site";

const featuredTitle = "Sitio Web Profesional";

export function PricingOverview() {
  return (
    <Reveal className="container-shell py-16" delay={80}>
      <section className="price-showcase">
        <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_20px_55px_rgba(15,23,32,0.08)] md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange/25 bg-orange/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange">
                <Sparkles size={15} aria-hidden="true" />
                Tarifario comercial
              </span>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-5xl">Lista de precios desde</h2>
              <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                Elegi una base de trabajo y la ajustamos a tu proyecto real.
              </p>
            </div>
            <div className="rounded-xl border border-orange/20 bg-[#F7F4EE] px-4 py-3 text-sm font-semibold text-navy/80">
              Precios base orientativos
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-line bg-[#F7F4EE] px-4 py-3 text-xs leading-6 text-muted md:text-sm">
            {pricingDisclaimer}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              const featured = service.title === featuredTitle;

              return (
                <motion.article
                  key={service.title}
                  className={`group relative rounded-2xl border p-5 transition duration-500 ease-out ${
                    featured
                      ? "border-orange bg-[#fff8f3] shadow-[0_18px_38px_rgba(255,90,31,0.18)]"
                      : "border-line bg-white hover:border-orange/40 hover:shadow-[0_16px_34px_rgba(15,23,32,0.1)]"
                  }`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: Math.min(index * 0.05, 0.25), duration: 0.45 }}
                  whileHover={{ y: -4 }}
                >
                  {featured ? (
                    <span className="absolute right-4 top-4 rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                      Mas elegido
                    </span>
                  ) : null}

                  <div className="flex items-start gap-3">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                        featured ? "bg-orange text-white" : "bg-orange/10 text-orange"
                      }`}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">{service.badge}</p>
                      <h3 className="mt-1 text-lg font-bold text-navy">{service.title}</h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted">{service.subtitle}</p>

                  <div className="mt-5 rounded-xl border border-orange/20 bg-[#F7F4EE] p-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-orange">Precios desde</p>
                    <p className="mt-1 text-2xl font-black leading-none text-navy">{service.priceFrom.replace("Desde ", "")}</p>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-xs text-muted">
                    <Clock size={14} className="text-orange" aria-hidden="true" />
                    {service.delivery}
                  </div>

                  <a
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e04a10]"
                    href={whatsappCta("service", service.title)}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Cotizar este servicio
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
