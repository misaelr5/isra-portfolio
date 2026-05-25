"use client";

import {
  ArrowRight,
  Check,
  Code2,
  LifeBuoy,
  MonitorCog,
  ShoppingCart,
  Sparkles,
  Target,
  type LucideIcon
} from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type Service = {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  items: string[];
  idealFor: string;
  tags: string[];
  icon: LucideIcon;
  category: "Web" | "Commerce" | "Sistemas" | "Soporte";
};

const primaryServices: Service[] = [
  {
    title: "Landing Page",
    subtitle: "Ideal para emprendedores, campañas y servicios",
    badge: "Inicial",
    category: "Web",
    description:
      "Una página directa, profesional y orientada a conversión para presentar tu servicio, captar consultas o lanzar una idea al mercado. Pensada para comunicar rápido, generar confianza y llevar al usuario a una acción concreta.",
    items: [
      "1 página completa y bien estructurada",
      "Secciones de presentación, beneficios y llamado a la acción",
      "Formulario de contacto o botón directo a WhatsApp",
      "Diseño responsive para celular, tablet y escritorio",
      "Optimización inicial de velocidad y carga visual",
      "Preparada para campañas, anuncios o redes sociales"
    ],
    idealFor: "Emprendedores, marcas personales, profesionales, campañas, servicios locales y lanzamientos.",
    tags: ["Emprendedores", "Profesionales", "Campañas", "Conversión"],
    icon: Target
  },
  {
    title: "Sitio Web Profesional",
    subtitle: "Para marcas, empresas y profesionales en crecimiento",
    badge: "Pro",
    category: "Web",
    description:
      "Un sitio completo para construir presencia digital, mostrar tus servicios, ordenar tu información comercial y transmitir una imagen más profesional. Ideal para empresas que necesitan una web clara, escalable y preparada para crecer.",
    items: [
      "Hasta 4 páginas o secciones principales",
      "Diseño personalizado adaptado a tu marca",
      "Página de inicio, servicios, contacto y contenido institucional",
      "SEO inicial para mejorar la presencia en buscadores",
      "Panel de administración según la tecnología utilizada",
      "Integración con WhatsApp, formularios y redes sociales",
      "Estructura preparada para escalar con nuevas secciones",
      "Optimización responsive para celular, tablet y escritorio"
    ],
    idealFor: "Empresas, comercios, profesionales, estudios, agencias y negocios en crecimiento.",
    tags: ["Empresas", "Profesionales", "Institucional", "Presencia digital"],
    icon: Code2
  },
  {
    title: "Tienda Online / E-commerce",
    subtitle: "Vendé productos o servicios desde tu web",
    badge: "Venta online",
    category: "Commerce",
    description:
      "Creamos una tienda online preparada para mostrar productos, recibir pedidos y facilitar la compra desde cualquier dispositivo. Una solución pensada para comercios que quieren vender más y tener un canal digital propio.",
    items: [
      "Catálogo de productos o servicios",
      "Carrito de compras y proceso de checkout",
      "Integración con medios de pago disponibles",
      "Configuración de envíos, retiro o contacto directo",
      "Diseño responsive y experiencia clara de compra",
      "Panel para gestionar productos, precios e imágenes"
    ],
    idealFor: "Comercios, tiendas físicas, marcas de productos, catálogos online y negocios que quieren vender por internet.",
    tags: ["E-commerce", "Comercios", "Ventas", "Catálogo online"],
    icon: ShoppingCart
  },
  {
    title: "Módulos Personalizados",
    subtitle: "Funcionalidades a medida para tu plataforma",
    badge: "A medida",
    category: "Sistemas",
    description:
      "Desarrollamos herramientas específicas para potenciar tu sitio, automatizar procesos o resolver necesidades concretas de tu negocio. Ideal cuando una web tradicional no alcanza y necesitás una función particular.",
    items: [
      "Calculadoras, cotizadores o simuladores",
      "Formularios avanzados y flujos personalizados",
      "Integraciones con APIs, sistemas externos o bases de datos",
      "Paneles internos para gestión de información",
      "Automatizaciones para reducir tareas manuales",
      "Funciones especiales para WordPress, WooCommerce, Shopify o desarrollos propios"
    ],
    idealFor: "Negocios que necesitan funcionalidades específicas, automatización, gestión interna o herramientas digitales a medida.",
    tags: ["Automatización", "APIs", "Sistemas", "Funcionalidades"],
    icon: Sparkles
  }
];

const supportServices: Service[] = [
  {
    title: "Optimización y Rediseño Web",
    subtitle: "Tu sitio actual, mejorado y modernizado",
    badge: "Rediseño",
    category: "Soporte",
    description:
      "Mejoramos webs existentes para que se vean más profesionales, carguen mejor, sean más claras y estén mejor preparadas para convertir visitas en consultas. No se trata solo de cambiar la estética, sino de mejorar la experiencia completa.",
    items: [
      "Auditoría visual y técnica del sitio actual",
      "Nuevo diseño UI/UX más moderno y ordenado",
      "Mejora de velocidad, estructura y navegación",
      "Optimización mobile para celulares y tablets",
      "Revisión de textos, llamados a la acción y jerarquía visual",
      "Ajustes para mejorar confianza, claridad y conversión"
    ],
    idealFor: "Webs antiguas, lentas, desordenadas, poco profesionales o que no generan consultas.",
    tags: ["UX", "Performance", "Modernización", "Conversión"],
    icon: MonitorCog
  },
  {
    title: "Mantenimiento y Soporte Web",
    subtitle: "Tu web actualizada, segura y funcionando",
    badge: "Soporte",
    category: "Soporte",
    description:
      "Nos encargamos del mantenimiento técnico, actualizaciones, correcciones y mejoras continuas para que tu web siga funcionando correctamente. Una opción ideal para no dejar tu presencia digital abandonada después de publicarla.",
    items: [
      "Actualizaciones técnicas y revisión general",
      "Backups preventivos y control de funcionamiento",
      "Corrección de errores o problemas visuales",
      "Cambios menores de textos, imágenes o secciones",
      "Revisión de formularios, botones y enlaces importantes",
      "Mejoras mensuales según necesidad del negocio"
    ],
    idealFor: "Empresas, profesionales y comercios que ya tienen una web y necesitan soporte continuo.",
    tags: ["Soporte", "Seguridad", "Continuidad", "Actualizaciones"],
    icon: LifeBuoy
  }
];

const allServices = [...primaryServices, ...supportServices];
const categories = ["Todos", "Web", "Commerce", "Sistemas", "Soporte"] as const;

function whatsappUrl(service: Service) {
  const text = `Hola, estuve viendo el servicio de ${service.title} en el portfolio web de ISRA y quiero cotizar mi proyecto.`;
  return `https://wa.me/5493544434403?text=${encodeURIComponent(text)}`;
}

export function ServicesCatalog() {
  const [activeTitle, setActiveTitle] = useState(allServices[0].title);
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos");
  const [pendingTitle, setPendingTitle] = useState(allServices[0].title);
  const [isSwitching, setIsSwitching] = useState(false);
  const switchTimer = useRef<number | null>(null);

  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      return category === "Todos" || service.category === category;
    });
  }, [category]);

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

  return (
    <section className="container-shell py-14">
      <div className="service-dashboard no-brand-card grid overflow-hidden rounded-2xl border border-line bg-[#F7F4EE] shadow-[0_28px_80px_rgba(15,23,32,0.12)] lg:grid-cols-[320px_1fr]">
        <aside className="border-b border-line bg-white/55 p-4 lg:border-b-0 lg:border-r">
          <div className="rounded-xl border border-line bg-[#F3EDE4] p-3">
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-500 ease-out ${
                    category === item ? "border-orange bg-orange text-white" : "border-line bg-white text-navy/70 hover:border-orange hover:text-orange"
                  }`}
                  type="button"
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              const selected = service.title === pendingTitle;

              return (
                <button
                  key={service.title}
                  className={`group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 ${
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
                    <span className={`mt-0.5 block truncate text-xs ${selected ? "text-white/78" : "text-muted"}`}>{service.badge}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="relative min-h-[620px] overflow-hidden p-5 md:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
          <div
            key={activeService.title}
            className="service-dashboard-panel relative"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <span className="service-text-pop inline-flex items-center rounded-full border border-orange/25 bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange">
                  {activeService.badge}
                </span>
                <h2 className="service-text-pop service-text-pop-1 mt-4 max-w-2xl text-3xl font-bold text-navy md:text-5xl">{activeService.title}</h2>
                <p className="service-text-pop service-text-pop-2 mt-3 max-w-2xl text-base font-medium text-orange">{activeService.subtitle}</p>
              </div>
              <span className="service-icon-pop grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-orange/10 text-orange ring-1 ring-orange/20">
                <ActiveIcon size={30} />
              </span>
            </div>

            <p className="service-text-pop service-text-pop-3 mt-8 max-w-3xl text-lg leading-8 text-muted">{activeService.description}</p>

            <div className="mt-9 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="service-panel-card no-brand-card rounded-2xl border border-line bg-white p-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,32,0.08)]">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy/50">Incluye</h3>
                <ul className="mt-5 grid gap-3">
                  {activeService.items.map((item, index) => (
                    <li
                      key={item}
                      className="service-list-pop flex gap-3 text-sm leading-6 text-navy/78"
                      style={{ "--service-pop-delay": `${260 + index * 70}ms` } as CSSProperties}
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange text-white">
                        <Check size={13} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-5">
                <div className="service-panel-card service-panel-card-2 no-brand-card rounded-2xl border border-line bg-white p-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,32,0.08)]">
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy/50">Ideal para</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{activeService.idealFor}</p>
                </div>
                <div className="service-panel-card service-panel-card-3 no-brand-card rounded-2xl border border-line bg-white p-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,32,0.08)]">
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy/50">Tags</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeService.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className="service-tag-pop rounded-full border border-orange/20 bg-[#F3EDE4] px-3 py-1 text-xs font-medium text-navy/75"
                        style={{ "--service-pop-delay": `${430 + index * 75}ms` } as CSSProperties}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="service-text-pop service-text-pop-4 mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#e04a10]"
                href={whatsappUrl(activeService)}
                rel="noreferrer"
                target="_blank"
              >
                Consultar
                <ArrowRight size={17} />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-md border border-orange bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-orange transition hover:bg-orange hover:text-white"
                href="/contact"
              >
                Formulario
              </a>
            </div>
          </div>
        </div>
      </div>

      {filteredServices.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-line bg-[#F7F4EE] p-8 text-center text-muted">No encontramos servicios para esa búsqueda.</div>
      ) : null}
    </section>
  );
}
