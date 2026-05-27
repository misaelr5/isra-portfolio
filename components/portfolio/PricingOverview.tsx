"use client";

import { ArrowRight, Clock, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import { motion, type Variants } from "framer-motion";
import { Reveal } from "@/components/portfolio/Reveal";
import { allServices, pricingDisclaimer } from "@/lib/services";
import { whatsappCta } from "@/lib/site";

const cardVariants: Variants = {
  rest: {
    rotateY: 0,
    rotateX: 0,
    y: 0,
    scale: 1
  },
  hover: {
    rotateY: 180,
    rotateX: -3,
    y: -8,
    scale: 1.035,
    transition: {
      duration: 0.78,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const faceVariants: Variants = {
  rest: {
    boxShadow: "0 18px 42px rgba(255, 90, 31, 0.09)"
  },
  hover: {
    boxShadow: "0 24px 54px rgba(255, 90, 31, 0.18), 0 0 30px rgba(255, 90, 31, 0.12)",
    transition: {
      duration: 0.45,
      ease: "easeOut"
    }
  }
};

export function PricingOverview() {
  return (
    <Reveal className="container-shell py-16" delay={80}>
      <section className="price-showcase">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange/25 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange">
              <Sparkles size={15} aria-hidden="true" />
              Tarifario comercial
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#201711] md:text-5xl">Lista de Precios</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">{pricingDisclaimer}</p>
          </div>
          <div className="rounded-xl border border-orange/20 bg-white/75 px-5 py-4 text-sm font-semibold text-[#3a2a21] shadow-[0_18px_46px_rgba(255,90,31,0.08)]">
            Pasá el mouse para ver cada precio
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {allServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                className="price-card group"
                initial="rest"
                whileHover="hover"
                style={{ "--price-delay": `${index * 90}ms` } as CSSProperties}
              >
                <motion.div
                  className="price-card__inner"
                  initial="rest"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div className="price-card__face price-card__front" variants={faceVariants}>
                    <div className="flex items-start justify-between gap-2">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange ring-1 ring-orange/20 transition group-hover:bg-orange group-hover:text-white">
                        <Icon size={19} aria-hidden="true" />
                      </span>
                      <span className="rounded-full border border-orange/15 bg-white/80 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-orange">
                        {service.badge}
                      </span>
                    </div>

                    <div className="mt-5">
                      <h3 className="text-base font-bold leading-tight text-[#201711]">{service.title}</h3>
                      <p className="mt-3 text-xs leading-5 text-[#6f5d51]">{service.subtitle}</p>
                    </div>

                    <div className="mt-auto flex items-center gap-2 pt-5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-orange">
                      Ver precio
                      <ArrowRight size={14} aria-hidden="true" />
                    </div>
                  </motion.div>

                  <motion.div className="price-card__face price-card__back" variants={faceVariants}>
                    <span className="price-card__glow" aria-hidden="true" />
                    <span className="relative z-10 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-orange/80">Desde</span>
                    <strong className="relative z-10 mt-2 block text-2xl font-black leading-none text-[#21160f]">
                      {service.priceFrom.replace("Desde ", "")}
                    </strong>
                    <div className="relative z-10 mt-4 flex items-start gap-2 rounded-lg border border-orange/18 bg-white/70 p-2.5 text-[0.72rem] leading-5 text-[#6f5d51]">
                      <Clock className="mt-0.5 shrink-0 text-orange" size={14} aria-hidden="true" />
                      <span>{service.delivery}</span>
                    </div>
                    <a
                      className="relative z-10 mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-orange px-3 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_28px_rgba(255,90,31,0.24)] transition hover:bg-[#e04a10]"
                      href={whatsappCta("service", service.title)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Cotizar
                      <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  </motion.div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
