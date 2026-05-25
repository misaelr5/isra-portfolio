import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/portfolio/Badge";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { SkillBar } from "@/components/portfolio/SkillBar";
import { SkillCard } from "@/components/portfolio/SkillCard";
import { TypeWriter } from "@/components/portfolio/TypeWriter";
import { aboutCards, featuredProjects, heroSkills, skillBars } from "@/components/portfolio/data";

export default function Home() {
  return (
    <main className="bg-page text-navy">
      <section className="relative z-10 min-h-screen overflow-hidden pt-24">
        <div className="container-shell relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-16 py-12 lg:grid-cols-2">
          <Reveal>
            <Badge>Bienvenidos a nuestra web</Badge>
            <span className="brand-star star-accent star-accent--lg mt-6" aria-hidden="true" />
            <h1 className="mt-6 text-5xl font-bold leading-tight text-navy">
              Hola, somos <br />
              <span className="hero-chroma-text">ISRA</span>
            </h1>
            <TypeWriter />
            <p className="mt-5 max-w-xl leading-8 text-muted">
              Desarrollamos sitios web, apps web y soluciones digitales modernas, 
              combinando código, diseño y plataformas como WordPress, WooCommerce, Webflow o Shopify.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white" href="/contact">
                Contactanos
                <ArrowRight size={18} />
              </Link>
              <Link className="rounded-md border border-orange bg-sand px-6 py-3 font-semibold text-orange hover:bg-orange hover:text-white" href="/projects">
                Ver proyectos
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-line bg-[#F7F4EE] p-6 shadow-[0_24px_70px_rgba(15,23,32,0.1)]">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {heroSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="relative z-10 section-padding bg-[#F7F4EE]">
        <Reveal className="container-shell">
          <div>
            <SectionIntro
              badge="Sobre Nosotros"
              title="Quienes somos"
              as="h2"
              subtitle="Somos estudiantes de ciencias computacionales especializados en backend y desarrollo web."
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-2xl border border-line bg-card p-6 text-center transition-transform hover:-translate-y-1">
                  <Icon className="mx-auto text-teal" size={34} />
                  <h2 className="mt-5 text-xl font-bold">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white" href="/about">
              Mas sobre nosotros
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="relative z-10 section-padding">
        <Reveal className="container-shell">
          <SectionIntro badge="Habilidades" title="Tech Stack" as="h2" subtitle="Tecnologías y herramientas que uso para construir productos digitales eficientes." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skillBars.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white transition hover:bg-[#e04a10]" href="/about#tecnologias">
              Ver más
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="relative z-10 section-padding bg-[#F7F4EE]">
        <Reveal className="container-shell">
          <div>
            <SectionIntro
              badge="Portfolio"
              title="Proyectos destacados"
              as="h2"
              subtitle="Algunos proyectos seleccionados de AI, data science y desarrollo web."
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white" href="/projects">
              Ver todos los proyectos
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="relative z-10 section-padding">
        <Reveal className="container-shell">
          <div className="mx-auto max-w-2xl rounded-2xl bg-card p-8 text-center md:p-12">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal/10 text-teal">
              <Star size={34} />
            </div>
            <h2 className="mt-6 text-3xl font-bold">Trabajemos juntos</h2>
            <p className="mt-4 leading-8 text-muted">
              Actualmente estamos disponibles para trabajos freelance y abiertos a nuevas oportunidades. Si tenés un proyecto en
              mente o querés colaborar, ponete en contacto con nosotros.
            </p>
            <Link
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-white"
              href="https://wa.me/5493544434403?text=Hola%2C%20estuve%20viendo%20tu%20portfolio%20web%20y%20quiero%20cotizar%20mi%20proyecto."
              rel="noreferrer"
              target="_blank"
            >
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.463 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Contacto
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
