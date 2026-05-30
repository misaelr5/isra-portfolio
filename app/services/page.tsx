import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { PricingOverview } from "@/components/portfolio/PricingOverview";
import { ServicesCatalog } from "@/components/portfolio/ServicesCatalog";
import { WorkProcess } from "@/components/portfolio/WorkProcess";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Servicios",
  description:
    "Landings, sitios web, e-commerce, sistemas a medida y soporte. Explorá el catálogo de servicios de ISRA y cotizá por WhatsApp.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-page text-navy">
      <section className="section-top pt-36">
        <Reveal className="container-shell">
          <SectionIntro
            badge="Servicios"
            title="Servicios"
            subtitle="Explorá nuestro catálogo y elegí el servicio que mejor se adapte a tu proyecto."
          />
        </Reveal>
      </section>
      <ServicesCatalog />
      <WorkProcess />
      <PricingOverview />
    </main>
  );
}
