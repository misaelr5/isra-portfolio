import { ProjectsFilter } from "@/components/portfolio/ProjectsFilter";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";

export default function ProjectsPage() {
  return (
    <main className="bg-page text-navy">
      <section className="section-top pt-36">
        <Reveal className="container-shell">
          <SectionIntro
            badge="Portfolio"
            title="Mis proyectos"
            subtitle="Explorá una selección de trabajos recientes en distintas tecnologías y áreas."
          />
        </Reveal>
      </section>
      <ProjectsFilter />
    </main>
  );
}
