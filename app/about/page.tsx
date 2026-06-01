import { Award, Calendar, ChevronDown, GraduationCap, MapPin } from "lucide-react";
import {
  siCss,
  siElementor,
  siHtml5,
  siJavascript,
  siLaravel,
  siMysql,
  siNextdotjs,
  siOdoo,
  siPhp,
  siPostgresql,
  siPrestashop,
  siPython,
  siReact,
  siShopify,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siWebflow,
  siWix,
  siWoocommerce,
  siWordpress
} from "simple-icons";
import { AboutHighlightTitle } from "@/components/portfolio/AboutHighlightTitle";
import { AboutMotionCard, AboutMotionGroup, AboutMotionItem, AboutMotionPanel } from "@/components/portfolio/AboutMotion";
import { CountUpStat } from "@/components/portfolio/CountUpStat";
import { CoursesKeyGrid } from "@/components/portfolio/CoursesKeyGrid";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { certifications, courses, education } from "@/components/portfolio/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sobre nosotros",
  description:
    "Conocé al equipo ISRA: desarrollo web, backend, UI/UX, automatizaciones y arquitectura de software para negocios en crecimiento.",
  path: "/about"
});

const coreTechnologies = [
  { name: "Python", icon: "python" },
  { name: "PHP", icon: "php" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Laravel", icon: "laravel" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "MySQL", icon: "mysql" },
  { name: "SQLite", icon: "sqlite" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Supabase", icon: "supabase" }
];

const platformTechnologies = [
  { name: "WordPress", icon: "wordpress" },
  { name: "WooCommerce", icon: "woocommerce" },
  { name: "Shopify", icon: "shopify" },
  { name: "Tiendanube", icon: "tiendanube" },
  { name: "PrestaShop", icon: "prestashop" },
  { name: "Webflow", icon: "webflow" },
  { name: "Wix", icon: "wix" },
  { name: "Elementor", icon: "elementor" },
  { name: "Odoo", icon: "odoo" }
];

type BrandIcon = {
  path: string;
  hex: string;
  title: string;
};

const technologyIcons: Record<string, BrandIcon> = {
  python: siPython,
  php: siPhp,
  javascript: siJavascript,
  typescript: siTypescript,
  html5: siHtml5,
  css: siCss,
  react: siReact,
  nextdotjs: siNextdotjs,
  laravel: siLaravel,
  tailwindcss: siTailwindcss,
  mysql: siMysql,
  sqlite: siSqlite,
  postgresql: siPostgresql,
  supabase: siSupabase,
  wordpress: siWordpress,
  woocommerce: siWoocommerce,
  shopify: siShopify,
  tiendanube: siShopify,
  prestashop: siPrestashop,
  webflow: siWebflow,
  wix: siWix,
  elementor: siElementor,
  odoo: siOdoo
};

const aboutStats = [
  { target: 14, prefix: "+", suffix: "", label: "Tecnologías" },
  { target: 8, prefix: "+", suffix: "", label: "Plataformas" },
  { target: 100, prefix: "", suffix: "%", label: "A medida" }
] as const;

const businessImpactCards = [
  {
    title: "Más consultas calificadas",
    text: "Webs claras, mensajes estratégicos y llamados a la acción pensados para convertir mejor.",
    metric: "+Conversión"
  },
  {
    title: "Operación más ordenada",
    text: "Sistemas, automatizaciones e integraciones para reducir tareas repetitivas y trabajar con menos fricción.",
    metric: "+Eficiencia"
  },
  {
    title: "Escalabilidad real",
    text: "Arquitectura, código e infraestructura preparados para acompañar el crecimiento del proyecto.",
    metric: "+Escala"
  }
] as const;

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-page text-navy">
      <section className="section-top pb-14 pt-28 md:pt-36">
        <AboutMotionGroup className="container-shell">
          <AboutMotionItem direction="scale">
            <SectionIntro
              badge="Sobre nosotros"
              title="Somos ISRA"
              subtitle={
                <>
                  <AboutHighlightTitle />
                  Diseñamos y desarrollamos soluciones digitales para negocios que necesitan crecer con claridad, sistema y resultados reales.
                </>
              }
            />
          </AboutMotionItem>
        </AboutMotionGroup>
      </section>

      <section className="pb-20">
        <AboutMotionGroup className="container-shell">
          <AboutMotionPanel className="relative overflow-hidden rounded-3xl border border-line bg-card p-6 shadow-[0_24px_70px_rgba(15,23,32,0.1)] md:p-9" direction="up" intensity={3}>
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange/12" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-orange/45 to-transparent" />
            <AboutMotionItem direction="up">
              <h2 className="text-2xl font-bold md:text-3xl">Nuestro foco</h2>
            </AboutMotionItem>
            <div className="relative z-10 mt-6 grid gap-4">
              <AboutMotionItem direction="up">
                <p className="leading-8 text-muted">Trabajando con nosotros vas a tener:</p>
              </AboutMotionItem>
              {businessImpactCards.map((item, index) => (
                <AboutMotionCard
                  key={item.title}
                  className="about-tech-sword-card rounded-2xl border border-line bg-white p-4"
                  hoverMode="hingeRight"
                  intensity={6}
                  index={index}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-navy">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                    </div>
                    <span className="rounded-full border border-orange/30 bg-orange/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-orange">
                      {item.metric.toUpperCase()}
                    </span>
                  </div>
                </AboutMotionCard>
              ))}
            </div>
          </AboutMotionPanel>
        </AboutMotionGroup>

        <AboutMotionGroup className="container-shell mt-10">
          <div className="about-stats-billboard grid gap-4 sm:grid-cols-3 sm:divide-x sm:divide-line">
            {aboutStats.map((stat, index) => (
              <AboutMotionItem key={stat.label} className="px-4 py-2 sm:px-8" delay={120 + index * 90} direction="up">
                <CountUpStat label={stat.label} prefix={stat.prefix} suffix={stat.suffix} target={stat.target} durationMs={1500} />
              </AboutMotionItem>
            ))}
          </div>
        </AboutMotionGroup>
      </section>

      <section className="section-padding">
        <AboutMotionGroup className="container-shell">
          <AboutMotionItem className="text-center" direction="up">
            <h2 className="text-3xl font-bold">Más sobre nosotros</h2>
            <span className="mt-4 inline-flex text-orange">
              <ChevronDown size={24} />
            </span>
          </AboutMotionItem>
        </AboutMotionGroup>
      </section>

      <section id="tecnologias" className="section-padding bg-[#F7F4EE]">
        <AboutMotionGroup className="container-shell">
          <AboutMotionItem className="text-center" direction="scale">
            <h2 className="text-3xl font-bold">Tecnologías</h2>
            <p className="mt-3 text-muted">Stack principal, CMS y plataformas con las que trabajamos.</p>
          </AboutMotionItem>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
            {coreTechnologies.map((technology, index) => (
              <AboutMotionCard
                key={technology.name}
                index={index}
                className="service-panel-card group flex min-h-[118px] flex-col items-center justify-center gap-3 rounded-xl border border-line bg-[#F3EDE4] p-4 text-center transition duration-500 ease-out hover:border-purple/60 hover:bg-[#F3EDE4] hover:shadow-[0_18px_42px_rgba(255,90,31,0.16)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 transition duration-300 group-hover:bg-purple/15">
                  <svg aria-hidden="true" className="h-7 w-7 transition duration-300 group-hover:scale-110" role="img" viewBox="0 0 24 24">
                    <path d={technologyIcons[technology.icon].path} fill={`#${technologyIcons[technology.icon].hex}`} />
                  </svg>
                </span>
                <h3 className="max-w-full break-words text-center text-sm font-semibold leading-snug text-navy">{technology.name}</h3>
              </AboutMotionCard>
            ))}
          </div>
          <AboutMotionItem className="my-10 flex items-center gap-4" delay={120} direction="scale">
            <div className="h-px flex-1 bg-line" />
            <span className="rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              CMS & E-commerce
            </span>
            <div className="h-px flex-1 bg-line" />
          </AboutMotionItem>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
            {platformTechnologies.map((technology, index) => (
              <AboutMotionCard
                key={technology.name}
                index={index}
                className="service-panel-card group flex min-h-[118px] flex-col items-center justify-center gap-3 rounded-xl border border-line bg-[#F3EDE4] p-4 text-center transition duration-500 ease-out hover:border-teal/60 hover:bg-[#F3EDE4] hover:shadow-[0_18px_42px_rgba(255,90,31,0.14)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 transition duration-300 group-hover:bg-teal/15">
                  <svg aria-hidden="true" className="h-7 w-7 transition duration-300 group-hover:scale-110" role="img" viewBox="0 0 24 24">
                    <path d={technologyIcons[technology.icon].path} fill={`#${technologyIcons[technology.icon].hex}`} />
                  </svg>
                </span>
                <h3 className="max-w-full break-words text-center text-sm font-semibold leading-snug text-navy">{technology.name}</h3>
              </AboutMotionCard>
            ))}
          </div>
        </AboutMotionGroup>
      </section>

      <section className="section-padding pt-2">
        <AboutMotionGroup className="container-shell">
          <AboutMotionItem direction="up">
            <SectionIntro badge="Formación" title="Trayectoria académica" />
          </AboutMotionItem>
        </AboutMotionGroup>
      </section>

      <section className="pb-24">
        <AboutMotionGroup className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {education.map((item, index) => (
            <AboutMotionCard key={item.title} className="service-panel-card rounded-2xl border border-line bg-card p-6" hoverMode="none" index={index}>
              <GraduationCap className="text-teal" size={34} aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
              <p className="mt-3 font-semibold text-navy">{item.institution}</p>
              <p className="mt-1 text-sm text-muted">{item.program}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={15} aria-hidden="true" />
                  {item.date}
                </span>
                {item.place ? (
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={15} aria-hidden="true" />
                    {item.place}
                  </span>
                ) : null}
                {item.grade ? (
                  <span className="inline-flex items-center gap-1">
                    <Award size={15} aria-hidden="true" />
                    {item.grade}
                  </span>
                ) : null}
              </div>
              <ul className="mt-6 grid gap-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </AboutMotionCard>
          ))}
        </AboutMotionGroup>
      </section>

      <section className="section-padding bg-[#F7F4EE]">
        <AboutMotionGroup className="container-shell">
          <AboutMotionItem className="text-center" direction="up">
            <h2 className="service-text-pop service-text-pop-1 text-3xl font-bold" data-reveal>
              Cursos clave
            </h2>
          </AboutMotionItem>
          <CoursesKeyGrid courses={courses} />
        </AboutMotionGroup>
      </section>

      <section className="section-padding">
        <AboutMotionGroup className="container-shell">
          <AboutMotionItem className="text-center" direction="up">
            <h2 className="service-text-pop service-text-pop-1 text-3xl font-bold" data-reveal>
              Certificaciones
            </h2>
          </AboutMotionItem>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <AboutMotionCard key={cert.title} className="service-panel-card rounded-2xl border border-line bg-card p-6" hoverMode="none" index={index}>
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="mt-2 text-sm font-semibold text-orange">
                  {cert.platform} · {cert.year}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">{cert.description}</p>
              </AboutMotionCard>
            ))}
          </div>
        </AboutMotionGroup>
      </section>
    </main>
  );
}
