import { ProjectsFilter } from "@/components/portfolio/ProjectsFilter";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Proyectos",
  description:
    "Portfolio de proyectos web y software: landing pages, e-commerce, CRM, automatizaciones y soluciones de datos desarrolladas por ISRA.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <main id="main-content" className="bg-page text-navy">
      <section className="section-top pt-36">
        <Reveal className="container-shell">
          <SectionIntro
            badge="Portfolio"
            title="Nuestros proyectos"
            subtitle="Explorá trabajos recientes en distintas tecnologías y áreas de negocio."
          />
        </Reveal>
      </section>
      <ProjectsFilter />
    </main>
  );
}

