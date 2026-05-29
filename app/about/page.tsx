import { BookOpen, Brain, Check, Code2, Database, GraduationCap, Heart, Network, Server, Shield, User } from "lucide-react";
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
import { IsraKnowledgeGraph } from "@/components/portfolio/IsraKnowledgeGraph";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sobre nosotros",
  description: "Conocé al equipo ISRA: desarrollo web, backend, UI/UX y formación en ciencias computacionales desde Córdoba.",
  path: "/about"
});

const iconMap = {
  user: User,
  code: Code2,
  education: GraduationCap,
  book: BookOpen
};

const studyIconMap = {
  computerScience: GraduationCap,
  logic: Brain,
  web: Code2,
  backend: Server,
  security: Shield,
  data: Database,
  network: Network
};

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
  prestashop: siPrestashop,
  webflow: siWebflow,
  wix: siWix,
  elementor: siElementor,
  odoo: siOdoo
};

const translatedMoreAbout = [
  {
    title: "Intereses personales",
    icon: "user",
    items: ["Explorar nuevas tecnologías", "Resolver desafíos algorítmicos", "Aportar a proyectos open-source", "Crear proyectos web"]
  },
  {
    title: "Filosofía de código",
    icon: "code",
    items: ["Código limpio y mantenible", "Foco en la experiencia de usuario", "Aprendizaje y mejora continua", "Construir pensando en escalabilidad"]
  },
  {
    title: "Estudios",
    icon: "education",
    items: [
      { label: "Ciencias computacionales", icon: "computerScience" },
      { label: "Pensamiento lógico y resolución de problemas", icon: "logic" },
      { label: "Desarrollo web", icon: "web" },
      { label: "Desarrollo backend", icon: "backend" },
      { label: "Ciberseguridad en formación", icon: "security" },
      { label: "Infraestructura de datos en formación", icon: "data" }
    ]
  },
  {
    title: "Objetivos futuros",
    icon: "book",
    items: ["Dominar técnicas avanzadas de backend", "Construir aplicaciones web con impacto", "Contribuir a proyectos open-source", "Profundizar en plataformas y CMS"]
  }
];

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-page text-navy">
      <section className="section-top section-padding">
        <AboutMotionGroup className="container-shell">
          <AboutMotionItem direction="scale">
          <SectionIntro
            badge="Sobre nosotros"
            title="Somos ISRA"
            subtitle={
              <>
                <AboutHighlightTitle />
                Un equipo de dos estudiantes con una convicción simple: la tecnología bien aplicada puede transformar cualquier idea en una solución real.
              </>
            }
          />
          </AboutMotionItem>
        </AboutMotionGroup>
      </section>

      <section className="pb-24">
        <AboutMotionGroup className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <AboutMotionPanel direction="left" intensity={8}>
            <IsraKnowledgeGraph />
          </AboutMotionPanel>
          <AboutMotionPanel
            className="service-panel-card relative overflow-hidden rounded-2xl border border-line bg-card/80 p-6 shadow-[0_24px_70px_rgba(15,23,32,0.08)] backdrop-blur md:p-8"
            delay={120}
            direction="right"
            intensity={5}
          >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />
            <AboutMotionItem delay={80} direction="right">
              <h2 className="service-text-pop service-text-pop-1 text-2xl font-bold">¿Qué hacemos?</h2>
            </AboutMotionItem>
            <div className="mt-5 grid gap-5 leading-8 text-muted">
              <AboutMotionItem delay={150} direction="right">
                <p>
                  En <span className="font-semibold text-teal">ISRA</span> trabajamos con PHP, Python, HTML, CSS, Node.js, React.js y Next.js,
                  tenemos experiencia en plataformas como WordPress, WooCommerce, Webflow, PrestaShop y Shopify. Nos especializamos en construir
                  aplicaciones web modernas, seguras y adaptadas a las necesidades de cada proyecto.
                </p>
              </AboutMotionItem>
              <AboutMotionItem delay={220} direction="right">
                <p>
                  <span className="font-semibold text-teal">Nos complementamos:</span> uno de nosotros tiene foco en backend, bases de datos y se está formando en ciberseguridad;
                  el otro se especializa en UI/UX y en el desarrollo de módulos personalizados para CMS.
                </p>
              </AboutMotionItem>
              <AboutMotionItem delay={290} direction="right">
                <p>
                  Nuestro camino en la programación empezó por las ganas de resolver problemas complejos. Eso nos llevó a explorar
                  lenguajes, frameworks y plataformas hasta construir una base sólida en desarrollo web y lógica de software — esto nos llevo a crear <span className="font-semibold text-teal">ISRA.</span>
                </p>
              </AboutMotionItem>
              <AboutMotionItem delay={360} direction="right">
                <p>
                  Creemos que una buena solución no solo tiene que funcionar: tiene que ser clara, intuitiva y fácil de usar. Por eso apostamos al aprendizaje continuo,
                  seguimos de cerca las tecnologías modernas y, cuando no estamos trabajando en un proyecto, estamos explorando nuevas herramientas,
                  estudiando patrones de diseño y  participando en proyectos Open-source.
                </p>
              </AboutMotionItem>
            </div>
          </AboutMotionPanel>
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
                  <svg
                    aria-hidden="true"
                    className="h-7 w-7 transition duration-300 group-hover:scale-110"
                    role="img"
                    viewBox="0 0 24 24"
                  >
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
                  <svg
                    aria-hidden="true"
                    className="h-7 w-7 transition duration-300 group-hover:scale-110"
                    role="img"
                    viewBox="0 0 24 24"
                  >
                    <path d={technologyIcons[technology.icon].path} fill={`#${technologyIcons[technology.icon].hex}`} />
                  </svg>
                </span>
                <h3 className="max-w-full break-words text-center text-sm font-semibold leading-snug text-navy">{technology.name}</h3>
              </AboutMotionCard>
            ))}
          </div>
        </AboutMotionGroup>
      </section>

      <section className="section-padding">
        <AboutMotionGroup className="container-shell">
          <AboutMotionItem className="text-center" direction="scale">
            <h2 className="text-3xl font-bold">Más sobre nosotros</h2>
          </AboutMotionItem>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {translatedMoreAbout.map((card, cardIndex) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap];
              return (
                <AboutMotionCard key={card.title} index={cardIndex} className="service-panel-card rounded-2xl border border-line bg-card p-6">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-purple/15 text-purple">
                      <Icon size={23} />
                    </span>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                  <ul className="mt-6 grid gap-3">
                    {card.items.map((item, index) => {
                      const label = typeof item === "string" ? item : item.label;
                      const ItemIcon =
                        typeof item === "string" ? (index % 2 === 0 ? Check : Heart) : studyIconMap[item.icon as keyof typeof studyIconMap];

                      return (
                        <li key={label} className="flex items-center gap-3 text-sm text-muted">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-teal/10 text-teal">
                            <ItemIcon size={16} />
                          </span>
                          {label}
                        </li>
                      );
                    })}
                  </ul>
                </AboutMotionCard>
              );
            })}
          </div>
        </AboutMotionGroup>
      </section>
    </main>
  );
}
