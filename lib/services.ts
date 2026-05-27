import {
  Code2,
  LifeBuoy,
  MonitorCog,
  ShoppingCart,
  Sparkles,
  Target,
  type LucideIcon
} from "lucide-react";

export type ServiceCategory = "Web" | "Commerce" | "Sistemas" | "Soporte";

export type Service = {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  items: string[];
  idealFor: string;
  tags: string[];
  icon: LucideIcon;
  category: ServiceCategory;
  priceFrom: string;
  delivery: string;
};

export const pricingDisclaimer =
  "Valores orientativos en pesos argentinos (ARS). La cotización final depende del alcance, integraciones, contenido y plazos acordados.";

export const primaryServices: Service[] = [
  {
    title: "Landing Page",
    subtitle: "Ideal para emprendedores, campañas y servicios",
    badge: "Inicial",
    category: "Web",
    priceFrom: "Desde $180.000",
    delivery: "Entrega estimada: 2 a 3 semanas",
    description:
      "Una página directa, profesional y orientada a conversión para presentar tu servicio, captar consultas o lanzar una idea al mercado.",
    items: [
      "1 página completa y bien estructurada",
      "Secciones de presentación, beneficios y llamado a la acción",
      "Formulario de contacto o botón directo a WhatsApp",
      "Diseño responsive para celular, tablet y escritorio",
      "Optimización inicial de velocidad y carga visual",
      "Preparada para campañas, anuncios o redes sociales"
    ],
    idealFor: "Emprendedores, marcas personales, profesionales, campañas y lanzamientos.",
    tags: ["Emprendedores", "Profesionales", "Campañas", "Conversión"],
    icon: Target
  },
  {
    title: "Sitio Web Profesional",
    subtitle: "Para marcas, empresas y profesionales en crecimiento",
    badge: "Pro",
    category: "Web",
    priceFrom: "Desde $350.000",
    delivery: "Entrega estimada: 3 a 5 semanas",
    description:
      "Sitio completo para construir presencia digital, mostrar servicios y transmitir una imagen profesional y escalable.",
    items: [
      "Hasta 4 páginas o secciones principales",
      "Diseño personalizado adaptado a tu marca",
      "Página de inicio, servicios, contacto e institucional",
      "SEO inicial para buscadores",
      "Panel de administración según la tecnología",
      "Integración con WhatsApp, formularios y redes",
      "Estructura preparada para crecer",
      "Optimización responsive completa"
    ],
    idealFor: "Empresas, comercios, profesionales, estudios y negocios en crecimiento.",
    tags: ["Empresas", "Profesionales", "Institucional", "Presencia digital"],
    icon: Code2
  },
  {
    title: "Tienda Online / E-commerce",
    subtitle: "Vendé productos o servicios desde tu web",
    badge: "Venta online",
    category: "Commerce",
    priceFrom: "Desde $450.000",
    delivery: "Entrega estimada: 4 a 6 semanas",
    description:
      "Tienda online para mostrar productos, recibir pedidos y facilitar la compra desde cualquier dispositivo.",
    items: [
      "Catálogo de productos o servicios",
      "Carrito de compras y proceso de checkout",
      "Integración con medios de pago disponibles",
      "Configuración de envíos, retiro o contacto directo",
      "Diseño responsive y experiencia clara de compra",
      "Panel para gestionar productos, precios e imágenes"
    ],
    idealFor: "Comercios, tiendas físicas, marcas de productos y catálogos online.",
    tags: ["E-commerce", "Comercios", "Ventas", "Catálogo online"],
    icon: ShoppingCart
  },
  {
    title: "Módulos Personalizados",
    subtitle: "Funcionalidades a medida para tu plataforma",
    badge: "A medida",
    category: "Sistemas",
    priceFrom: "Desde $120.000",
    delivery: "Plazo según alcance del módulo",
    description:
      "Herramientas específicas para potenciar tu sitio, automatizar procesos o resolver necesidades concretas de tu negocio.",
    items: [
      "Calculadoras, cotizadores o simuladores",
      "Formularios avanzados y flujos personalizados",
      "Integraciones con APIs, sistemas externos o bases de datos",
      "Paneles internos para gestión de información",
      "Automatizaciones para reducir tareas manuales",
      "Funciones para WordPress, WooCommerce, Shopify o desarrollo propio"
    ],
    idealFor: "Negocios que necesitan funcionalidades específicas, automatización o gestión interna.",
    tags: ["Automatización", "APIs", "Sistemas", "Funcionalidades"],
    icon: Sparkles
  }
];

export const supportServices: Service[] = [
  {
    title: "Optimización y Rediseño Web",
    subtitle: "Tu sitio actual, mejorado y modernizado",
    badge: "Rediseño",
    category: "Soporte",
    priceFrom: "Desde $200.000",
    delivery: "Entrega estimada: 2 a 4 semanas",
    description:
      "Mejoramos webs existentes para que se vean más profesionales, carguen mejor y conviertan más consultas.",
    items: [
      "Auditoría visual y técnica del sitio actual",
      "Nuevo diseño UI/UX más moderno y ordenado",
      "Mejora de velocidad, estructura y navegación",
      "Optimización mobile",
      "Revisión de textos, CTAs y jerarquía visual",
      "Ajustes para mejorar confianza y conversión"
    ],
    idealFor: "Webs antiguas, lentas, desordenadas o que no generan consultas.",
    tags: ["UX", "Performance", "Modernización", "Conversión"],
    icon: MonitorCog
  },
  {
    title: "Mantenimiento y Soporte Web",
    subtitle: "Tu web actualizada, segura y funcionando",
    badge: "Soporte",
    category: "Soporte",
    priceFrom: "Desde $45.000 / mes",
    delivery: "Plan mensual recurrente",
    description:
      "Mantenimiento técnico, actualizaciones y mejoras continuas para que tu web siga funcionando correctamente.",
    items: [
      "Actualizaciones técnicas y revisión general",
      "Backups preventivos y control de funcionamiento",
      "Corrección de errores o problemas visuales",
      "Cambios menores de textos, imágenes o secciones",
      "Revisión de formularios, botones y enlaces",
      "Mejoras mensuales según necesidad"
    ],
    idealFor: "Empresas y comercios que ya tienen web y necesitan soporte continuo.",
    tags: ["Soporte", "Seguridad", "Continuidad", "Actualizaciones"],
    icon: LifeBuoy
  }
];

export const allServices = [...primaryServices, ...supportServices];

export const serviceCategories = ["Todos", "Web", "Commerce", "Sistemas", "Soporte"] as const;
