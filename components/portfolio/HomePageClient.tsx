"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/portfolio/Badge";
import { HomeMotionArticle, HomeMotionItem, HomeMotionPanel, HomeMotionReveal } from "@/components/portfolio/HomeMotion";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { SkillBar } from "@/components/portfolio/SkillBar";
import { SkillCard } from "@/components/portfolio/SkillCard";
import { buttonHover } from "@/components/portfolio/motion";
import { TypeWriter } from "@/components/portfolio/TypeWriter";
import { aboutCards, featuredProjects, heroSkills, skillBars } from "@/components/portfolio/data";
import { defaultWhatsAppHref } from "@/lib/site";

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

function AnimatedHeroWord({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
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
      className="mt-6 overflow-visible text-5xl font-bold leading-tight text-navy"
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
  return (
    <main id="main-content" className="bg-page text-navy">
      <section className="relative z-10 min-h-screen overflow-hidden pt-24">
        <div className="container-shell relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-16 py-12 lg:grid-cols-2">
          <div>
            <HomeMotionItem delay={0}>
              <Badge>Soluciones digitales en Córdoba</Badge>
            </HomeMotionItem>
            <HomeMotionItem delay={80}>
              <span className="brand-star star-accent star-accent--lg mt-6" aria-hidden="true" />
            </HomeMotionItem>
            <HomeMotionItem delay={160}>
              <HeroAnimatedTitle />
            </HomeMotionItem>
            <HomeMotionItem delay={280}>
              <TypeWriter />
            </HomeMotionItem>
            <HomeMotionItem delay={380}>
              <p className="mt-5 max-w-xl leading-8 text-muted">
                Desarrollamos sitios web, apps y sistemas que funcionan: código sólido, diseño claro y plataformas como
                WordPress, WooCommerce, Webflow o Shopify cuando conviene a tu negocio.
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
                Cotizar proyecto
                <ArrowRight size={18} aria-hidden="true" />
              </motion.a>
              <MotionLink className="rounded-md border border-orange bg-sand px-6 py-3 font-semibold text-orange transition hover:bg-orange hover:text-white" href="/services" {...buttonHover}>
                Ver servicios
              </MotionLink>
            </HomeMotionItem>
          </div>

          <HomeMotionPanel className="rounded-2xl border border-line bg-[#F7F4EE] p-6 shadow-[0_24px_70px_rgba(15,23,32,0.1)]" delay={220}>
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

      <section id="services" className="relative z-10 section-padding bg-[#F7F4EE]">
        <HomeMotionReveal className="container-shell">
          <SectionIntro
            badge="Sobre nosotros"
            title="Quiénes somos"
            as="h2"
            subtitle="Somos un estudio joven de Córdoba con formación en ciencias computacionales, enfocados en desarrollo web, backend y productos digitales útiles."
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
              Más sobre nosotros
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
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
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
            <h2 className="mt-6 text-3xl font-bold">Trabajemos juntos</h2>
            <p className="mt-4 leading-8 text-muted">
              Estamos disponibles para proyectos freelance y colaboraciones. Contanos qué querés construir y te respondemos con una propuesta clara.
            </p>
            <motion.a className="mt-7 inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white transition hover:bg-[#e04a10]" href={defaultWhatsAppHref} rel="noreferrer" target="_blank" {...buttonHover}>
              Escribinos por WhatsApp
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
          </HomeMotionPanel>
        </HomeMotionReveal>
      </section>
    </main>
  );
}
