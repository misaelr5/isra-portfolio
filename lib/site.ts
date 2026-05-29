/** Configuración central del sitio — editar acá contacto y URLs de deploy. */
export const siteConfig = {
  name: "ISRA",
  tagline: "Innovación en Sistemas, Redes y Apps",
  description:
    "Construimos tecnología web para negocios en crecimiento: sitios, apps, e-commerce, sistemas internos e integraciones a medida.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://isra.dev",
  locale: "es_AR",
  location: "Córdoba, Argentina",
  email: "ledesma.rme@gmail.com",
  /** Formato internacional sin + ni espacios: 54 + código de área + número */
  whatsapp: "5493544434403",
  social: {
    github: "https://github.com/misaelr5",
    linkedin: "https://www.linkedin.com/in/misaelr5/"
  }
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function whatsappCta(preset: "general" | "service" = "general", serviceTitle?: string) {
  if (preset === "service" && serviceTitle) {
    return whatsappLink(`Hola, estuve viendo el servicio de ${serviceTitle} en ISRA y quiero cotizar mi proyecto.`);
  }
  return whatsappLink("Hola, estuve viendo la web de ISRA y quiero cotizar un proyecto.");
}

export const defaultWhatsAppHref = whatsappCta("general");
