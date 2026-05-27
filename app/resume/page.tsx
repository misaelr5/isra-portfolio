"use client";

import {
  Award,
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
  Shield,
  Sparkles,
  Terminal,
  WandSparkles,
  type LucideIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
  { id: "education", label: "Formacion" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "certifications", label: "Certificaciones" }
];

const skillCards: InfoCard[] = [
  {
    title: "Desarrollo Web",
    text: "Sitios modernos, rapidos y responsive con foco en diseno, claridad y conversion.",
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
    title: "Seguridad e Innovacion",
    text: "Buenas practicas, redes, testing, hardening, automatizacion e IA aplicada en formacion continua.",
    icon: Shield
  }
];

const stackGroups = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "UI/UX", "Responsive Design"],
  Backend: ["PHP", "Python", "Node.js", "Laravel", "APIs", "Dashboards", "Paneles internos", "Automatizacion"],
  CMS: ["WordPress", "Webflow", "Wix", "Elementor", "Odoo"],
  "E-commerce": ["WooCommerce", "Shopify", "PrestaShop", "Tiendas online", "Catalogos online"],
  "Bases de datos": ["MySQL", "SQLite", "PostgreSQL", "Supabase"],
  Seguridad: ["Redes", "Ciberseguridad", "Seguridad web", "Hardening", "Testing", "Monitoreo", "Infraestructura"],
  Herramientas: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Terminal", "npm", "Vercel"],
  IA: ["IA aplicada", "Automatizacion IA", "Nuevas tecnologias", "Open Source"]
};

const educationCards: InfoCard[] = [
  {
    category: "Secundario",
    title: "Bachiller en Economia",
    institution: "Formacion secundaria",
    year: "2022",
    status: "Finalizado",
    text: "Economia, administracion, matematica, estadistica y base comercial para proyectos digitales."
  },
  {
    category: "Preuniversitario",
    title: "Ciencias Computacionales",
    institution: "Universidad Siglo 21",
    year: "2024",
    status: "Finalizado",
    text: "Pensamiento logico, base tecnologica, introduccion a sistemas y programacion."
  },
  {
    category: "Ciencias Computacionales",
    title: "Harvard CS50",
    institution: "Harvard",
    year: "2026",
    status: "En formacion",
    text: "Fundamentos computacionales, algoritmos, estructuras de datos, estadistica y desarrollo web."
  },
  {
    category: "Ciberseguridad",
    title: "Roadmap de Ciberseguridad",
    institution: "Cyber Israel / INCD",
    year: "2026",
    status: "En formación",
    text: "Seguridad web, proteccion digital, buenas practicas, redes y formacion progresiva en ciberseguridad."
  }
];

const courseChips = ["Algoritmos", "Desarrollo web", "Backend", "Bases de datos", "Ciberseguridad", "Redes", "IA aplicada", "Arquitectura", "UI/UX"];

const experienceCards: InfoCard[] = [
  { title: "Desarrollo Web", text: "Sitios institucionales, landing pages y paginas comerciales orientadas a presencia digital.", icon: Code2 },
  { title: "CMS y Plataformas", text: "Implementacion de webs administrables con WordPress, WooCommerce, Webflow, Shopify y PrestaShop.", icon: Layers },
  { title: "Sistemas y Modulos", text: "Funcionalidades a medida, calculadoras, formularios, dashboards, paneles e integraciones.", icon: Database },
  { title: "Seguridad y Mejora Continua", text: "Formacion en seguridad web, testing, buenas practicas, hardening, redes e infraestructura.", icon: Shield }
];

const projectCards: InfoCard[] = [
  { title: "Sitios Web Institucionales", text: "Webs profesionales para marcas, empresas, servicios y presencia digital.", icon: Code2 },
  { title: "Landing Pages Comerciales", text: "Paginas enfocadas en captar consultas, presentar servicios y convertir visitas.", icon: Rocket },
  { title: "Tiendas Online", text: "E-commerce, catalogos digitales, productos, pedidos y canales de venta online.", icon: Briefcase },
  { title: "Modulos Personalizados", text: "Funciones especificas para WordPress, WooCommerce, Shopify o desarrollos propios.", icon: Layers },
  { title: "Dashboards y Paneles", text: "Herramientas internas para gestionar informacion, clientes, tareas o procesos.", icon: Database },
  { title: "Automatizaciones", text: "Integraciones, APIs y flujos digitales para reducir tareas manuales.", icon: Sparkles }
];

const certificationCards: InfoCard[] = [
  { title: "CS50 / Computer Science", status: "En curso", text: "Fundamentos de programacion, algoritmos, estructuras de datos y desarrollo web.", icon: Award },
  { title: "Ciencias Computacionales", status: "Finalizado", text: "Base tecnologica, pensamiento logico y orientacion al area de sistemas.", icon: GraduationCap },
  { title: "Roadmap de Ciberseguridad", status: "En formacion", text: "Seguridad web, redes, proteccion digital y buenas practicas informaticas.", icon: Shield },
  { title: "Backend y Sistemas Web", status: "Formacion continua", text: "PHP, Python, bases de datos, APIs, arquitectura y logica de negocio.", icon: Database },
  { title: "CMS & E-commerce", status: "Practica aplicada", text: "WordPress, WooCommerce, Shopify, Webflow, PrestaShop, Wix y Odoo.", icon: Layers },
  { title: "IA y Automatizacion", status: "Exploracion continua", text: "IA aplicada, automatizacion de procesos, nuevas tecnologias y proyectos open-source.", icon: Sparkles }
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
  APIs: { icon: FileCode2 },
  Dashboards: { icon: LayoutDashboard },
  "Paneles internos": { icon: LayoutDashboard },
  Automatizacion: { icon: WandSparkles },
  WordPress: { simpleIcon: "wordpress" },
  Webflow: { simpleIcon: "webflow" },
  Wix: { simpleIcon: "wix" },
  Elementor: { simpleIcon: "elementor" },
  Odoo: { simpleIcon: "odoo" },
  WooCommerce: { simpleIcon: "woocommerce" },
  Shopify: { simpleIcon: "shopify" },
  PrestaShop: { simpleIcon: "prestashop" },
  "Tiendas online": { icon: Briefcase },
  "Catalogos online": { icon: Layers },
  MySQL: { simpleIcon: "mysql" },
  SQLite: { simpleIcon: "sqlite" },
  PostgreSQL: { simpleIcon: "postgresql" },
  Supabase: { simpleIcon: "supabase" },
  Redes: { simpleIcon: "cloudflare" },
  Ciberseguridad: { simpleIcon: "kalilinux" },
  "Seguridad web": { simpleIcon: "owasp" },
  Hardening: { simpleIcon: "letsencrypt" },
  Testing: { simpleIcon: "postman" },
  Monitoreo: { simpleIcon: "grafana" },
  Infraestructura: { simpleIcon: "cloudflare" },
  Git: { simpleIcon: "git" },
  GitHub: { simpleIcon: "github" },
  "VS Code": { icon: Code2 },
  Figma: { simpleIcon: "figma" },
  Docker: { simpleIcon: "docker" },
  Terminal: { icon: Terminal },
  npm: { simpleIcon: "npm" },
  Vercel: { simpleIcon: "vercel" },
  "IA aplicada": { icon: Sparkles },
  "Automatizacion IA": { icon: WandSparkles },
  "Nuevas tecnologias": { icon: Rocket },
  "Open Source": { icon: Code2 }
};

function ResumeCard({ card }: { card: InfoCard }) {
  const Icon = card.icon ?? BookOpen;

  return (
    <article className="rounded-2xl border border-line bg-white p-6 shadow-[0_18px_44px_rgba(15,23,32,0.1)]">
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
  const Icon = visual.icon;

  return (
    <button
      aria-label={`${item} - ${group}`}
      className="group grid h-16 w-16 place-items-center rounded-xl border border-orange/20 bg-[#F3EDE4] text-orange shadow-[0_12px_30px_rgba(15,23,32,0.08)] transition duration-500 ease-out hover:-translate-y-1 hover:border-orange/55 hover:bg-white"
      title={item}
      type="button"
    >
        {visual.simpleIcon ? (
          <Image
            className="h-7 w-7 object-contain"
            src={`https://cdn.simpleicons.org/${visual.simpleIcon}/FF5A1F`}
            alt=""
            width={28}
            height={28}
            aria-hidden="true"
          />
        ) : Icon ? (
          <Icon size={25} />
        ) : null}
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
          <div className="grid gap-8 rounded-2xl border border-line bg-[#F7F4EE] p-8 shadow-[0_24px_70px_rgba(15,23,32,0.1)] lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">ISRA</p>
              <p className="mt-2 text-sm font-medium text-muted">Innovacion en Software, Redes y Aplicaciones</p>
              <h1 className="mt-8 text-5xl font-bold leading-tight text-navy md:text-6xl">Somos ISRA</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Desarrollamos sitios web, apps web, sistemas, e-commerce y modulos personalizados con foco en diseno, rendimiento,
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
                className={`rounded-md px-4 py-3 text-sm font-semibold transition ${
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
                <h2 className="text-3xl font-bold">Stack Tecnico</h2>
                <p className="mt-3 leading-7 text-muted">Tecnologias, plataformas y herramientas que usamos para construir soluciones digitales.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {allStackFilters.map((filter) => (
                    <button
                      key={filter}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
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
                <h2 className="text-3xl font-bold">Formacion</h2>
                <p className="mt-3 leading-7 text-muted">Nuestro recorrido academico, cursos y areas de aprendizaje tecnico.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {educationCards.map((card) => (
                  <ResumeCard key={card.title} card={card} />
                ))}
              </div>
              <section className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-2xl font-bold">Cursos clave</h3>
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
                <h2 className="text-3xl font-bold">Experiencia Tecnica</h2>
                <p className="mt-3 leading-7 text-muted">Practica aplicada en desarrollo web, CMS, sistemas y soluciones digitales.</p>
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
                <p className="mt-3 leading-7 text-muted">Formacion constante en desarrollo, software, ciberseguridad e innovacion digital.</p>
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
