import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { ServicesCatalog } from "@/components/portfolio/ServicesCatalog";

export default function ServicesPage() {
  return (
    <main className="bg-page text-navy">
      <section className="section-top pt-36">
        <Reveal className="container-shell">
          <SectionIntro
            badge="Servicios"
            title="Servicios"
            subtitle="Elegí una categoría, explorá cada solución y encontrá el camino más claro para convertir tu idea en una presencia digital real."
          />
        </Reveal>
      </section>
      <ServicesCatalog />
    </main>
  );
}
