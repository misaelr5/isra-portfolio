import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import { CoursesKeyGrid } from "@/components/portfolio/CoursesKeyGrid";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { certifications, courses, education } from "@/components/portfolio/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata({
    title: "Formación",
    description: "Trayectoria académica, cursos y certificaciones del equipo ISRA.",
    path: "/academics"
  }),
  robots: {
    index: false,
    follow: true
  }
};

export default function AcademicsPage() {
  return (
    <main id="main-content" className="bg-page text-navy">
      <section className="section-top section-padding">
        <Reveal className="container-shell">
          <SectionIntro
            badge="Formación"
            title="Trayectoria académica"
            subtitle="Nuestro recorrido académico, cursos y certificaciones que forman el perfil técnico de ISRA."
          />
        </Reveal>
      </section>

      <section className="pb-24">
        <Reveal className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {education.map((item) => (
            <article key={item.title} className="service-panel-card rounded-2xl border border-line bg-card p-6">
              <GraduationCap className="text-teal" size={34} aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
              <p className="mt-3 font-semibold text-navy">{item.institution}</p>
              <p className="mt-1 text-sm text-muted">{item.program}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={15} aria-hidden="true" />
                  {item.date}
                </span>
                {item.place ? (
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={15} aria-hidden="true" />
                    {item.place}
                  </span>
                ) : null}
                {item.grade ? (
                  <span className="inline-flex items-center gap-1">
                    <Award size={15} aria-hidden="true" />
                    {item.grade}
                  </span>
                ) : null}
              </div>
              <ul className="mt-6 grid gap-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section-padding bg-[#F7F4EE]">
        <Reveal className="container-shell">
          <h2 className="service-text-pop service-text-pop-1 text-center text-3xl font-bold" data-reveal>Cursos clave</h2>
          <CoursesKeyGrid courses={courses} />
        </Reveal>
      </section>

      <section className="section-padding">
        <Reveal className="container-shell">
          <h2 className="service-text-pop service-text-pop-1 text-center text-3xl font-bold" data-reveal>Certificaciones</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <article key={cert.title} className="service-panel-card rounded-2xl border border-line bg-card p-6">
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="mt-2 text-sm font-semibold text-orange">
                  {cert.platform} · {cert.year}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">{cert.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
