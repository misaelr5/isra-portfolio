"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { HomeMotionArticle, HomeMotionItem, HomeMotionPanel, HomeMotionReveal } from "@/components/portfolio/HomeMotion";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { SkillBar } from "@/components/portfolio/SkillBar";
import { SkillCard } from "@/components/portfolio/SkillCard";
import { buttonHover } from "@/components/portfolio/motion";
import { TypeWriter } from "@/components/portfolio/TypeWriter";
import { aboutCards, heroSkills, projects, skillBars } from "@/components/portfolio/data";
import { allServices } from "@/lib/services";
import { defaultWhatsAppHref, whatsappLink } from "@/lib/site";

const MotionLink = motion(Link);

const heroLetterVariants: Variants = {
  hidden: { opacity: 0, y: -8, rotateZ: -8, scale: 0.74 },
  visible: {
    opacity: 1,
    y: [16, -7, 0],
    rotateZ: [5, -1.5, 0],
    scale: [0.74, 1.12, 1],
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] }
  }
};

const heroTitleVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.08 } }
};

const homePortfolioTitles = [
  "Portfolio Web de ISRA",
  "Calculadora de Divisas",
  "Sistema de Detección de Fraude Fiscal",
  "E-commerce de Indumentaria"
] as const;

function AnimatedHeroWord({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text} data-text={text}>
      {Array.from(text).map((letter, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block overflow-visible"
          key={`${text}-${letter}-${index}`}
          style={{ transformOrigin: "50% 72%" }}
          variants={heroLetterVariants}
        >
          {letter === " " ? "\u00a0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

function HeroAnimatedTitle() {
  return (
    <motion.h1
      aria-label="Hola, somos ISRA"
      className="mt-6 overflow-visible text-4xl font-bold leading-tight text-navy md:text-5xl"
      initial="hidden"
      variants={heroTitleVariants}
      viewport={{ once: true, amount: 0.8 }}
      whileInView="visible"
    >
      <AnimatedHeroWord text="Hola, somos" />
      <br />
      <AnimatedHeroWord className="hero-chroma-text mt-1 inline-block" text="ISRA" />
    </motion.h1>
  );
}

export function HomePageClient() {
  const homeFeaturedProjects = projects.filter((project) => homePortfolioTitles.includes(project.title as (typeof homePortfolioTitles)[number]));
  const homeFinalCtaHref = whatsappLink("Hola, quiero cotizar ahora. Vi tu portfolio y quiero avanzar con mi proyecto.");

  return (
    <main id="main-content" className="bg-page text-navy">
      <section className="relative z-10 overflow-hidden pt-24 md:min-h-screen">
        <div className="container-shell relative z-10 grid items-center gap-10 py-10 md:min-h-[calc(100vh-6rem)] md:gap-16 md:py-12 lg:grid-cols-2">
          <div>
            <HomeMotionItem delay={160}>
              <HeroAnimatedTitle />
            </HomeMotionItem>
            <HomeMotionItem delay={280}>
              <TypeWriter />
            </HomeMotionItem>
            <HomeMotionItem delay={380}>
              <p className="mt-5 max-w-xl leading-8 text-muted">
                Diseñamos y desarrollamos sistemas internos, webs y soluciones digitales a medida para que tu negocio venda mejor, se organice mejor y escale con tecnología.
              </p>
            </HomeMotionItem>
            <HomeMotionItem className="mt-8 flex flex-wrap gap-4" delay={480}>
              <motion.a
                className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white transition hover:bg-[#e04a10]"
                href={defaultWhatsAppHref}
                rel="noreferrer"
                target="_blank"
                {...buttonHover}
              >
                Cotizar por WhatsApp
                <ArrowRight size={18} aria-hidden="true" />
              </motion.a>
              <MotionLink className="rounded-md border border-orange bg-sand px-6 py-3 font-semibold text-orange transition hover:bg-orange hover:text-white" href="/projects" {...buttonHover}>
                Ver casos reales
              </MotionLink>
            </HomeMotionItem>
            <HomeMotionItem className="mt-7 flex flex-wrap gap-2" delay={560}>
              <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-navy/75">Respuesta en menos de 24h</span>
              <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-navy/75">Presupuesto claro desde el inicio</span>
              <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-navy/75">Enfoque comercial, no solo técnico</span>
            </HomeMotionItem>
          </div>

          <HomeMotionPanel className="home-hero-dashboard rounded-2xl border border-line bg-[#F7F4EE] p-6 shadow-[0_24px_70px_rgba(15,23,32,0.1)]" delay={220}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {heroSkills.map((skill, index) => (
                <HomeMotionReveal key={skill.name} delay={index * 45}>
                  <SkillCard skill={skill} />
                </HomeMotionReveal>
              ))}
            </div>
          </HomeMotionPanel>
        </div>
      </section>

      <section className="relative z-10 pb-8">
        <HomeMotionReveal className="container-shell">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_80px_rgba(15,23,32,0.14)]">
            <div className="relative bg-white px-5 py-7 md:px-8 md:py-9">
              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-orange/12 blur-3xl" />
              <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="inline-flex items-center rounded-full border border-orange/30 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange">
                    Oferta principal
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-navy md:text-3xl">
                    Elegí el servicio ideal y empezá a convertir tráfico en clientes
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                    Te mostramos opciones claras, con precio base y alcance concreto para que tomes decisión rápido.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 md:p-7">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {allServices.map((service, index) => {
                  const Icon = service.icon;
                  const featured = service.title === "Sitio Web Profesional";
                  return (
                    <HomeMotionReveal key={service.title} delay={index * 45}>
                      <article
                        className={`group relative overflow-hidden rounded-xl border p-4 transition duration-500 ease-out hover:-translate-y-1 ${
                          featured
                            ? "border-orange bg-[#fff8f3] shadow-[0_18px_36px_rgba(255,90,31,0.2)]"
                            : "border-line bg-[#fbfaf8] hover:border-orange/45 hover:shadow-[0_16px_30px_rgba(15,23,32,0.1)]"
                        }`}
                      >
                        {featured ? (
                          <span className="absolute right-3 top-3 rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                            Recomendado
                          </span>
                        ) : null}
                        <div className="flex items-start gap-3">
                          <span
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg transition duration-300 group-hover:scale-110 ${
                              featured ? "bg-orange text-white" : "bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white"
                            }`}
                          >
                            <Icon size={18} />
                          </span>
                          <div className="min-w-0">
                            <h3 className="truncate text-sm font-bold text-navy">{service.title}</h3>
                            <p className="mt-1 text-xs font-semibold text-orange">{service.priceFrom}</p>
                            <p className="mt-2 line-clamp-2 text-xs leading-6 text-muted">{service.subtitle}</p>
                          </div>
                        </div>
                      </article>
                    </HomeMotionReveal>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col gap-3 rounded-xl border border-line bg-[#f7f4ee] p-4 md:flex-row md:items-center md:justify-between">
                <p className="text-sm font-medium text-navy/80">
                  Si no sabés por dónde empezar, te recomendamos el plan según objetivo, tiempo y presupuesto.
                </p>
                <MotionLink
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#e04a10]"
                  href="/services"
                  {...buttonHover}
                >
                  Ver todos los servicios
                  <ArrowRight size={16} aria-hidden="true" />
                </MotionLink>
              </div>
            </div>
          </div>
        </HomeMotionReveal>
      </section>

      <section id="services" className="relative z-10 section-padding bg-[#F7F4EE]">
        <HomeMotionReveal className="container-shell">
          <SectionIntro
            badge="Por qué ISRA"
            title="Sobre nosotros"
            as="h2"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              const cardDirections = ["left", "up", "right"] as const;
              return (
                <HomeMotionArticle
                  key={card.title}
                  className="rounded-2xl border border-line bg-card p-6 text-center transition-transform hover:-translate-y-1"
                  direction={cardDirections[index] ?? "up"}
                  index={index}
                >
                  <Icon className="mx-auto text-teal" size={34} aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-bold">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
                </HomeMotionArticle>
              );
            })}
          </div>
          <HomeMotionReveal className="mt-10 text-center" delay={180} direction="scale">
            <MotionLink className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white" href="/about" {...buttonHover}>
              Conocer al equipo
              <ArrowRight size={18} aria-hidden="true" />
            </MotionLink>
          </HomeMotionReveal>
        </HomeMotionReveal>
      </section>

      <section className="relative z-10 section-padding">
        <HomeMotionReveal className="container-shell" direction="right">
          <SectionIntro
            badge="Habilidades"
            title="Tech stack"
            as="h2"
            subtitle="Tecnologías con las que construimos productos digitales para clientes y proyectos propios."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skillBars.map((skill, index) => (
              <HomeMotionReveal key={skill.name} delay={index * 65}>
                <SkillBar {...skill} />
              </HomeMotionReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <MotionLink className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white transition hover:bg-[#e04a10]" href="/about#tecnologias" {...buttonHover}>
              Ver tecnologías
              <ArrowRight size={18} aria-hidden="true" />
            </MotionLink>
          </div>
        </HomeMotionReveal>
      </section>

      <section className="relative z-10 section-padding bg-[#F7F4EE]">
        <HomeMotionReveal className="container-shell">
          <SectionIntro badge="Portfolio" title="Proyectos destacados" as="h2" subtitle="Trabajos seleccionados en desarrollo web, sistemas y data." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homeFeaturedProjects.map((project, index) => (
              <HomeMotionReveal key={project.title} delay={index * 80}>
                <ProjectCard project={project} featured />
              </HomeMotionReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <MotionLink className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white" href="/projects" {...buttonHover}>
              Ver todos los proyectos
              <ArrowRight size={18} aria-hidden="true" />
            </MotionLink>
          </div>
        </HomeMotionReveal>
      </section>

      <section className="relative z-10 section-padding">
        <HomeMotionReveal className="container-shell">
          <HomeMotionPanel className="mx-auto max-w-2xl rounded-2xl bg-card p-8 text-center md:p-12">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal/10 text-teal">
              <Star size={34} aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-3xl font-bold">Listo para tu próximo paso digital</h2>
            <p className="mt-4 leading-8 text-muted">
              Contanos qué querés lanzar o mejorar y te respondemos con un plan concreto, tiempos y presupuesto desde el inicio.
            </p>
            <motion.a className="mt-7 inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white transition hover:bg-[#e04a10]" href={homeFinalCtaHref} rel="noreferrer" target="_blank" {...buttonHover}>
              Quiero cotizar ahora
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
          </HomeMotionPanel>
        </HomeMotionReveal>
      </section>
    </main>
  );
}
