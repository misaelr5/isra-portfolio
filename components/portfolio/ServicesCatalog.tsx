"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Check, Clock, Tag } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/portfolio/Reveal";
import { allServices, pricingDisclaimer, type Service } from "@/lib/services";
import { whatsappCta } from "@/lib/site";

function whatsappUrl(service: Service) {
  return whatsappCta("service", service.title);
}

const dashboardVariants: Variants = {
  hidden: { opacity: 0, y: 92, scale: 0.96, rotateX: 7 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] }
  }
};

const panelVariants: Variants = {
  enter: { opacity: 0, y: 28, scale: 0.985, filter: "blur(10px)" },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.035, delayChildren: 0.035 }
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 0.985,
    filter: "blur(8px)",
    transition: { duration: 0.28, ease: "easeInOut" }
  }
};

const floatItemVariants: Variants = {
  enter: { opacity: 0, y: 20, scale: 0.96 },
  center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.34, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

const letterVariants: Variants = {
  enter: { opacity: 0, y: 34, rotateX: 70, rotateZ: -4, filter: "blur(8px)" },
  center: (index: number) => ({
    opacity: 1,
    y: [26, -7, 0],
    rotateX: 0,
    rotateZ: 0,
    filter: "blur(0px)",
    transition: { delay: index * 0.026, duration: 0.72, ease: [0.16, 1, 0.3, 1] }
  }),
  exit: { opacity: 0, y: -16, filter: "blur(6px)", transition: { duration: 0.2 } }
};

function FloatingTitle({ title }: { title: string }) {
  const words = title.split(" ");

  return (
    <h2 className="mt-4 max-w-2xl text-3xl font-bold text-navy md:text-5xl" aria-label={title}>
      {words.map((word, wordIndex) => (
        <span className="mr-[0.24em] inline-block whitespace-nowrap" key={`${title}-${word}-${wordIndex}`}>
          {Array.from(word).map((letter, letterIndex) => {
            const index = words.slice(0, wordIndex).join("").length + wordIndex + letterIndex;
            return (
              <motion.span
                aria-hidden="true"
                className="inline-block"
                custom={index}
                key={`${title}-${word}-${letter}-${letterIndex}`}
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h2>
  );
}

export function ServicesCatalog() {
  const [activeTitle, setActiveTitle] = useState(allServices[0].title);
  const [pendingTitle, setPendingTitle] = useState(allServices[0].title);
  const [isSwitching, setIsSwitching] = useState(false);
  const switchTimer = useRef<number | null>(null);

  const filteredServices = allServices;

  const activeService = filteredServices.find((service) => service.title === activeTitle) ?? filteredServices[0] ?? allServices[0];
  const ActiveIcon = activeService.icon;

  useEffect(() => {
    if (!filteredServices.some((service) => service.title === activeTitle)) {
      const nextService = filteredServices[0] ?? allServices[0];
      setActiveTitle(nextService.title);
      setPendingTitle(nextService.title);
      setIsSwitching(false);
    }
  }, [activeTitle, filteredServices]);

  useEffect(() => {
    return () => {
      if (switchTimer.current) {
        window.clearTimeout(switchTimer.current);
      }
    };
  }, []);

  function selectService(title: string) {
    if (title === activeTitle && !isSwitching) {
      return;
    }

    if (switchTimer.current) {
      window.clearTimeout(switchTimer.current);
    }

    setPendingTitle(title);
    setIsSwitching(true);
    setActiveTitle(title);

    switchTimer.current = window.setTimeout(() => {
      setIsSwitching(false);
    }, 900);
  }

  function trackCta(eventName: string, serviceTitle: string) {
    if (typeof window === "undefined") return;
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.("event", eventName, {
      service_title: serviceTitle,
      page_location: window.location.pathname
    });
  }

  return (
    <Reveal className="container-shell py-8 md:py-14" delay={100} variant="scale">
    <section>
      <motion.div
        className="service-dashboard no-brand-card grid overflow-hidden rounded-2xl border border-line bg-[#F7F4EE] shadow-[0_28px_80px_rgba(15,23,32,0.12)]"
        initial="hidden"
        variants={dashboardVariants}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
      >
        <aside className="border-b border-line bg-white/55 p-3 md:p-4">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              const selected = service.title === pendingTitle;

              return (
                <button
                  key={service.title}
                  className={`group flex min-w-[220px] items-center gap-3 rounded-xl border p-3 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 lg:min-w-0 ${
                    selected
                      ? "border-orange bg-orange text-white shadow-[0_16px_36px_rgba(255,90,31,0.22)]"
                      : "border-line bg-white text-navy hover:border-orange/50 hover:bg-[#F7F4EE]"
                  }`}
                  type="button"
                  onClick={() => selectService(service.title)}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      selected ? "bg-white/18 text-white" : "bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white"
                    }`}
                  >
                    <Icon size={19} />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold">{service.title}</span>
                    <span className={`mt-0.5 block truncate text-xs ${selected ? "text-white/78" : "text-muted"}`}>
                      {service.priceFrom}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="relative min-h-0 overflow-hidden p-4 md:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
          <AnimatePresence mode="wait">
          <motion.div
            key={activeService.title}
            animate="center"
            className="service-dashboard-panel relative"
            exit="exit"
            initial="enter"
            variants={panelVariants}
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <motion.span className="inline-flex items-center rounded-full border border-orange/25 bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange" variants={floatItemVariants}>
                  {activeService.badge}
                </motion.span>
                <FloatingTitle title={activeService.title} />
                <motion.p className="mt-3 max-w-2xl text-base font-medium text-orange" variants={floatItemVariants}>{activeService.subtitle}</motion.p>
              </div>
              <motion.span
                className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-orange/10 text-orange ring-1 ring-orange/20"
                variants={floatItemVariants}
                whileHover={{ rotate: 8, scale: 1.08 }}
              >
                <ActiveIcon size={30} />
              </motion.span>
            </div>

            <motion.div className="mt-6 flex flex-wrap gap-3" variants={floatItemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-white px-4 py-2 text-sm font-bold text-orange">
                <Tag size={16} aria-hidden="true" />
                {activeService.priceFrom}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-navy/75">
                <Clock size={16} className="text-orange" aria-hidden="true" />
                {activeService.delivery}
              </span>
            </motion.div>

            <motion.p className="mt-4 text-xs leading-6 text-faint" variants={floatItemVariants}>{pricingDisclaimer}</motion.p>

            <motion.p className="mt-6 max-w-3xl text-lg leading-8 text-muted" variants={floatItemVariants}>{activeService.description}</motion.p>

            <div className="mt-7 grid gap-5 md:mt-9 md:gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <motion.div className="no-brand-card rounded-2xl border border-line bg-white p-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,32,0.08)]" variants={floatItemVariants}>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy/50">Incluye</h3>
                <ul className="mt-5 grid gap-3">
                  {activeService.items.map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-navy/78"
                      style={{ "--service-pop-delay": `${260 + index * 70}ms` } as CSSProperties}
                      variants={floatItemVariants}
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange text-white">
                        <Check size={13} />
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <div className="grid gap-5">
                <motion.div className="no-brand-card rounded-2xl border border-line bg-white p-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,32,0.08)]" variants={floatItemVariants}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy/50">Ideal para</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{activeService.idealFor}</p>
                </motion.div>
                <motion.div className="no-brand-card rounded-2xl border border-line bg-white p-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,32,0.08)]" variants={floatItemVariants}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy/50">Tags</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeService.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        className="rounded-full border border-orange/20 bg-[#F3EDE4] px-3 py-1 text-xs font-medium text-navy/75"
                        style={{ "--service-pop-delay": `${430 + index * 75}ms` } as CSSProperties}
                        variants={floatItemVariants}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div className="mt-6 flex flex-wrap gap-3 md:mt-8" variants={floatItemVariants}>
              <a
                className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#e04a10]"
                href={whatsappUrl(activeService)}
                rel="noreferrer"
                target="_blank"
                aria-label={`Cotizar ${activeService.title} por WhatsApp`}
                data-cta="service-quote-whatsapp"
                onClick={() => trackCta("service_quote_whatsapp_click", activeService.title)}
              >
                Cotizar este servicio
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-md border border-orange bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-orange transition hover:bg-orange hover:text-white"
                href="/contact"
                aria-label={`Abrir formulario para ${activeService.title}`}
                data-cta="service-contact-form"
                onClick={() => trackCta("service_contact_form_click", activeService.title)}
              >
                Formulario
              </a>
            </motion.div>
          </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

    </section>
    </Reveal>
  );
}
