"use client";

import {
  Activity,
  Award,
  Bot,
  Brain,
  BookOpen,
  Briefcase,
  Check,
  Code2,
  Database,
  FileCode2,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Layers,
  Monitor,
  Network,
  Rocket,
  Server,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  WandSparkles,
  type LucideIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/portfolio/Reveal";

type TabId = "skills" | "education" | "experience" | "projects" | "certifications";

type InfoCard = {
  title: string;
  text: string;
  icon?: LucideIcon;
  category?: string;
  institution?: string;
  year?: string;
  status?: string;
};

const tabs: Array<{ id: TabId; label: string }> = [
  { id: "skills", label: "Habilidades" },
  { id: "education", label: "Formación" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "certifications", label: "Certificaciones" }
];

const skillCards: InfoCard[] = [
  {
    title: "Desarrollo Web",
    text: "Sitios modernos, rápidos y responsive con foco en diseño, claridad y conversión.",
    icon: Code2
  },
  {
    title: "Apps Web y Sistemas",
    text: "Paneles internos, dashboards, formularios avanzados, APIs y soluciones a medida.",
    icon: Layers
  },
  {
    title: "CMS & E-commerce",
    text: "Webs administrables y tiendas online con WordPress, WooCommerce, Shopify, Webflow y PrestaShop.",
    icon: Rocket
  },
  {
    title: "Seguridad e Innovación",
    text: "Buenas prácticas, redes, testing, hardening, automatización e IA aplicada en formación continua.",
    icon: Shield
  }
];

const stackGroups = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "UI/UX", "Responsive Design"],
  Backend: ["PHP", "Python", "Node.js", "Laravel", "APIs", "Dashboards", "Paneles internos", "Automatización"],
  CMS: ["WordPress", "Webflow", "Wix", "Elementor", "Odoo"],
  "E-commerce": ["WooCommerce", "Shopify", "PrestaShop", "Tiendas online", "Catálogos online"],
  "Bases de datos": ["MySQL", "SQLite", "PostgreSQL", "Supabase"],
  Seguridad: ["Redes", "Ciberseguridad", "Seguridad web", "Hardening", "Testing", "Monitoreo", "Infraestructura"],
  Herramientas: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Terminal", "npm", "Vercel"],
  IA: ["IA aplicada", "Automatización IA", "Nuevas tecnologías", "Open Source"]
};

const educationCards: InfoCard[] = [
  {
    category: "Secundario",
    title: "Bachiller en Economía",
    institution: "Formación secundaria",
    year: "2022",
    status: "Finalizado",
    text: "Economía, administración, matemática, estadística y base comercial para proyectos digitales."
  },
  {
    category: "Preuniversitario",
    title: "Ciencias Computacionales",
    institution: "Universidad Siglo 21",
    year: "2024",
    status: "Finalizado",
    text: "Pensamiento lógico, base tecnológica, introducción a sistemas y programación."
  },
  {
    category: "Ciencias Computacionales",
    title: "Harvard CS50",
    institution: "Harvard",
    year: "2026",
    status: "En formación",
    text: "Fundamentos computacionales, algoritmos, estructuras de datos, estadistica y desarrollo web."
  },
  {
    category: "Ciberseguridad",
    title: "Roadmap de Ciberseguridad",
    institution: "Cyber Israel / INCD",
    year: "2026",
    status: "En formación",
    text: "Seguridad web, protección digital, buenas prácticas, redes y formación progresiva en ciberseguridad."
  }
];

const courseChips = ["Algoritmos", "Desarrollo web", "Backend", "Bases de datos", "Ciberseguridad", "Redes", "IA aplicada", "Arquitectura", "UI/UX"];

const experienceCards: InfoCard[] = [
  { title: "Desarrollo Web", text: "Sitios institucionales, landing pages y páginas comerciales orientadas a presencia digital.", icon: Code2 },
  { title: "CMS y Plataformas", text: "Implementación de webs administrables con WordPress, WooCommerce, Webflow, Shopify y PrestaShop.", icon: Layers },
  { title: "Sistemas y Módulos", text: "Funcionalidades a medida, calculadoras, formularios, dashboards, paneles e integraciones.", icon: Database },
  { title: "Seguridad y Mejora Continua", text: "Formación en seguridad web, testing, buenas prácticas, hardening, redes e infraestructura.", icon: Shield }
];

const projectCards: InfoCard[] = [
  { title: "Sitios Web Institucionales", text: "Webs profesionales para marcas, empresas, servicios y presencia digital.", icon: Code2 },
  { title: "Landing Pages Comerciales", text: "Paginas enfocadas en captar consultas, presentar servicios y convertir visitas.", icon: Rocket },
  { title: "Tiendas Online", text: "E-commerce, catálogos digitales, productos, pedidos y canales de venta online.", icon: Briefcase },
  { title: "Módulos Personalizados", text: "Funciones específicas para WordPress, WooCommerce, Shopify o desarrollos propios.", icon: Layers },
  { title: "Dashboards y Paneles", text: "Herramientas internas para gestionar información, clientes, tareas o procesos.", icon: Database },
  { title: "Automatizaciones", text: "Integraciones, APIs y flujos digitales para reducir tareas manuales.", icon: Sparkles }
];

const certificationCards: InfoCard[] = [
  { title: "CS50 / Computer Science", status: "En curso", text: "Fundamentos de programación, algoritmos, estructuras de datos y desarrollo web.", icon: Award },
  { title: "Ciencias Computacionales", status: "Finalizado", text: "Base tecnológica, pensamiento lógico y orientación al área de sistemas.", icon: GraduationCap },
  { title: "Roadmap de Ciberseguridad", status: "En formación", text: "Seguridad web, redes, protección digital y buenas prácticas informáticas.", icon: Shield },
  { title: "Backend y Sistemas Web", status: "Formación continua", text: "PHP, Python, bases de datos, APIs, arquitectura y lógica de negocio.", icon: Database },
  { title: "CMS & E-commerce", status: "Práctica aplicada", text: "WordPress, WooCommerce, Shopify, Webflow, PrestaShop, Wix y Odoo.", icon: Layers },
  { title: "IA y Automatización", status: "Exploración continua", text: "IA aplicada, automatización de procesos, nuevas tecnologías y proyectos open-source.", icon: Sparkles }
];

const allStackFilters = ["Todo", ...Object.keys(stackGroups)];

const stackVisuals: Record<string, { simpleIcon?: string; icon?: LucideIcon }> = {
  HTML: { simpleIcon: "html5" },
  CSS: { simpleIcon: "css" },
  JavaScript: { simpleIcon: "javascript" },
  TypeScript: { simpleIcon: "typescript" },
  React: { simpleIcon: "react" },
  "Next.js": { simpleIcon: "nextdotjs" },
  "Tailwind CSS": { simpleIcon: "tailwindcss" },
  "UI/UX": { icon: Sparkles },
  "Responsive Design": { icon: Monitor },
  PHP: { simpleIcon: "php" },
  Python: { simpleIcon: "python" },
  "Node.js": { simpleIcon: "nodedotjs" },
  Laravel: { simpleIcon: "laravel" },
  APIs: { simpleIcon: "openapiinitiative" },
  Dashboards: { icon: LayoutDashboard },
  "Paneles internos": { icon: LayoutDashboard },
  Automatización: { icon: Bot },
  WordPress: { simpleIcon: "wordpress" },
  Webflow: { simpleIcon: "webflow" },
  Wix: { simpleIcon: "wix" },
  Elementor: { simpleIcon: "elementor" },
  Odoo: { simpleIcon: "odoo" },
  WooCommerce: { simpleIcon: "woocommerce" },
  Shopify: { simpleIcon: "shopify" },
  PrestaShop: { simpleIcon: "prestashop" },
  "Tiendas online": { icon: ShoppingCart },
  "Catálogos online": { icon: Layers },
  MySQL: { simpleIcon: "mysql" },
  SQLite: { simpleIcon: "sqlite" },
  PostgreSQL: { simpleIcon: "postgresql" },
  Supabase: { simpleIcon: "supabase" },
  Redes: { icon: Network },
  Ciberseguridad: { simpleIcon: "kalilinux" },
  "Seguridad web": { simpleIcon: "owasp" },
  Hardening: { icon: ShieldCheck },
  Testing: { simpleIcon: "postman" },
  Monitoreo: { icon: Activity },
  Infraestructura: { icon: Server },
  Git: { simpleIcon: "git" },
  GitHub: { simpleIcon: "github" },
  "VS Code": { simpleIcon: "visualstudiocode" },
  Figma: { simpleIcon: "figma" },
  Docker: { simpleIcon: "docker" },
  Terminal: { icon: Terminal },
  npm: { simpleIcon: "npm" },
  Vercel: { simpleIcon: "vercel" },
  "IA aplicada": { icon: Brain },
  "Automatización IA": { icon: WandSparkles },
  "Nuevas tecnologías": { icon: Rocket },
  "Open Source": { simpleIcon: "opensourceinitiative" }
};

function buildTechFallbackLogo(label: string) {
  const initials = label
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><rect width="28" height="28" rx="6" fill="#fff4ec"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#ff5a1f">${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function ResumeCard({ card }: { card: InfoCard }) {
  const Icon = card.icon ?? BookOpen;

  return (
    <article className="service-panel-card rounded-2xl border border-line bg-white p-6 shadow-[0_18px_44px_rgba(15,23,32,0.1)]">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange/10 text-orange">
          <Icon size={23} />
        </span>
        {card.status ? <span className="rounded-full border border-orange/25 bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">{card.status}</span> : null}
      </div>
      {card.category ? <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-orange">{card.category}</p> : null}
      <h3 className="mt-4 text-xl font-bold text-navy">{card.title}</h3>
      {card.institution || card.year ? (
        <p className="mt-2 text-sm font-medium text-muted">
          {[card.institution, card.year].filter(Boolean).join(" · ")}
        </p>
      ) : null}
      <p className="mt-4 leading-7 text-muted">{card.text}</p>
    </article>
  );
}

function StackTile({ group, item }: { group: string; item: string }) {
  const visual = stackVisuals[item] ?? { icon: Code2 };
  const logoSrc = visual.simpleIcon
    ? `https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${visual.simpleIcon}.svg`
    : buildTechFallbackLogo(item);
  const fallbackSrc = buildTechFallbackLogo(item);

  return (
    <button
      aria-label={`${item} - ${group}`}
      className="group grid h-16 w-16 place-items-center rounded-xl border border-orange/20 bg-[#F3EDE4] text-orange shadow-[0_12px_30px_rgba(15,23,32,0.08)] transition duration-500 ease-out hover:-translate-y-1 hover:border-orange/55 hover:bg-white"
      title={item}
      type="button"
    >
      <Image
        className="h-7 w-7 object-contain"
        src={logoSrc}
        alt={item}
        width={28}
        height={28}
        loading="lazy"
        onError={(event) => {
          const target = event.currentTarget;
          if (target.src !== fallbackSrc) {
            target.src = fallbackSrc;
          }
        }}
      />
    </button>
  );
}

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<TabId>("skills");
  const [stackFilter, setStackFilter] = useState("Todo");

  const visibleStack = useMemo(() => {
    if (stackFilter === "Todo") {
      return Object.entries(stackGroups).flatMap(([group, items]) => items.map((item) => ({ item, group })));
    }

    return (stackGroups[stackFilter as keyof typeof stackGroups] ?? []).map((item) => ({ item, group: stackFilter }));
  }, [stackFilter]);

  return (
    <main id="main-content" className="bg-page text-navy">
      <Reveal className="section-top section-padding">
        <section className="container-shell">
          <div className="service-panel-card grid gap-8 rounded-2xl border border-line bg-[#F7F4EE] p-8 shadow-[0_24px_70px_rgba(15,23,32,0.1)] lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">ISRA</p>
              <p className="mt-2 text-sm font-medium text-muted">Innovación en Software, Redes y Aplicaciones</p>
              <h1 className="mt-8 text-5xl font-bold leading-tight text-navy md:text-6xl">Somos ISRA</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Desarrollamos sitios web, apps web, sistemas, e-commerce y módulos personalizados con foco en diseño, rendimiento,
                seguridad y soluciones reales para negocios.
              </p>
            </div>
            <Link className="btn-primary w-fit" href="/services#services">
              Ver servicios
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal className="container-shell pb-24" delay={100}>
      <section id="resume-content">
        <div className="rounded-2xl border border-line bg-[#F7F4EE] p-3">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`service-tag-pop rounded-md px-4 py-3 text-sm font-semibold transition ${
                  activeTab === tab.id ? "bg-orange text-white" : "bg-[#F3EDE4] text-navy hover:text-orange"
                }`}
                type="button"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {activeTab === "skills" ? (
            <div className="grid gap-8">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {skillCards.map((card) => (
                  <ResumeCard key={card.title} card={card} />
                ))}
              </div>
              <section className="rounded-2xl border border-line bg-white p-6">
                <h2 className="service-text-pop service-text-pop-1 text-3xl font-bold">Stack Técnico</h2>
                <p className="service-text-pop service-text-pop-2 mt-3 leading-7 text-muted">Tecnologías, plataformas y herramientas que usamos para construir soluciones digitales.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {allStackFilters.map((filter) => (
                    <button
                      key={filter}
                      className={`service-tag-pop rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        stackFilter === filter ? "border-orange bg-orange text-white" : "border-line bg-[#F3EDE4] text-muted hover:text-orange"
                      }`}
                      type="button"
                      onClick={() => setStackFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {visibleStack.map(({ item, group }) => (
                    <StackTile key={`${group}-${item}`} group={group} item={item} />
                  ))}
                </div>
              </section>
            </div>
          ) : null}

          {activeTab === "education" ? (
            <div className="grid gap-8">
              <div>
                <h2 className="text-3xl font-bold">Formación</h2>
                <p className="mt-3 leading-7 text-muted">Nuestro recorrido académico, cursos y áreas de aprendizaje técnico.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {educationCards.map((card) => (
                  <ResumeCard key={card.title} card={card} />
                ))}
              </div>
              <section className="rounded-2xl border border-line bg-white p-6">
                <h3 className="service-text-pop service-text-pop-1 text-2xl font-bold">Cursos clave</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {courseChips.map((chip) => (
                    <button key={chip} className="course-key-chip" type="button">
                      <span>{chip}</span>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          ) : null}

          {activeTab === "experience" ? (
            <div className="grid gap-8">
              <div>
                <h2 className="text-3xl font-bold">Experiencia Técnica</h2>
                <p className="mt-3 leading-7 text-muted">Práctica aplicada en desarrollo web, CMS, sistemas y soluciones digitales.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {experienceCards.map((card) => (
                  <ResumeCard key={card.title} card={card} />
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === "projects" ? (
            <div className="grid gap-8">
              <div>
                <h2 className="text-3xl font-bold">Proyectos</h2>
                <p className="mt-3 leading-7 text-muted">Soluciones digitales que desarrollamos o estamos construyendo.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projectCards.map((card) => (
                  <ResumeCard key={card.title} card={card} />
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === "certifications" ? (
            <div className="grid gap-8">
              <div>
                <h2 className="text-3xl font-bold">Certificaciones y Aprendizaje</h2>
                <p className="mt-3 leading-7 text-muted">Formación constante en desarrollo, software, ciberseguridad e innovación digital.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {certificationCards.map((card) => (
                  <ResumeCard key={card.title} card={card} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
      </Reveal>
    </main>
  );
}
