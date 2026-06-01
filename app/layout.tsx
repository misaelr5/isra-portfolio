import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { AmbientBackground } from "@/components/portfolio/AmbientBackground";
import { AppMotion } from "@/components/portfolio/AppMotion";
import { Footer } from "@/components/portfolio/Footer";
import { Navbar } from "@/components/portfolio/Navbar";
import { baseMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff5a1f"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: "Argentina",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressCountry: "AR"
    },
    email: siteConfig.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+${siteConfig.whatsapp}`,
        areaServed: "AR",
        availableLanguage: ["es"]
      }
    ],
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin, siteConfig.social.instagram]
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "es-AR",
    publisher: {
      "@id": `${siteConfig.url}#organization`
    }
  };

  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${siteConfig.url}#services`,
    name: "Servicios ISRA",
    url: `${siteConfig.url}/services`,
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page", description: "Página orientada a conversión y captación de consultas." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sitio Web Profesional", description: "Sitio web institucional escalable y optimizado." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tienda Online / E-commerce", description: "Implementación de tiendas con foco comercial y operación." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Módulos Personalizados", description: "Desarrollo de funcionalidades e integraciones a medida." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Optimización y Rediseño Web", description: "Mejora de rendimiento, UX y conversión en webs existentes." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mantenimiento y Soporte Web", description: "Soporte técnico continuo, actualización y monitoreo." } }
    ]
  };

  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Saltar al contenido
        </a>
        <AppMotion />
        <AmbientBackground />
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationLd)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteLd)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesLd)
          }}
        />
      </body>
    </html>
  );
}
