import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const siteUrl = siteConfig.url;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Desarrollo web y soluciones digitales`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "desarrollo web",
    "apps web",
    "e-commerce",
    "WordPress",
    "Next.js",
    "Córdoba",
    "Argentina",
    "ISRA"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Desarrollo web y soluciones digitales`,
    description: siteConfig.description,
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Desarrollo web y soluciones digitales`,
    description: siteConfig.description,
    images: ["/images/og-cover.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" }
};

export function pageMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url },
    twitter: { title, description }
  };
}
