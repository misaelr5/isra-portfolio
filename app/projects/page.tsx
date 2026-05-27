import { ProjectsFilter } from "@/components/portfolio/ProjectsFilter";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Proyectos",
  description: "Portfolio de proyectos de ISRA en desarrollo web, e-commerce, sistemas y machine learning.",
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
            subtitle="Explorá trabajos recientes en distintas tecnologías y áreas."
          />
        </Reveal>
      </section>
      <ProjectsFilter />
    </main>
  );
}
