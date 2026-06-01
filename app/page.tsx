import { HomePageClient } from "@/components/portfolio/HomePageClient";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Desarrollo web y soluciones digitales",
  description:
    "ISRA diseña y desarrolla sitios web, e-commerce, sistemas internos e integraciones a medida en Córdoba, Argentina. Cotizá tu proyecto.",
  path: "/"
});

export default function Home() {
  return <HomePageClient />;
}

