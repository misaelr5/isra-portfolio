import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import { CoursesKeyGrid } from "@/components/portfolio/CoursesKeyGrid";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionIntro } from "@/components/portfolio/SectionIntro";
import { certifications, courses, education } from "@/components/portfolio/data";

export default function AcademicsPage() {
  return (
    <main className="bg-page text-navy">
      <section className="section-top section-padding">
        <Reveal className="container-shell">
          <SectionIntro
            badge="Formacion"
            title="Trayectoria academica"
            subtitle="Mi recorrido academico, cursos y certificaciones que fueron formando mi perfil tecnico."
          />
        </Reveal>
      </section>

      <section className="pb-24">
        <Reveal className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {education.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-card p-6">
              <GraduationCap className="text-teal" size={34} />
              <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
              <p className="mt-3 font-semibold text-navy">{item.institution}</p>
              <p className="mt-1 text-sm text-muted">{item.program}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={15} />
                  {item.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={15} />
                  {item.place}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Award size={15} />
                  {item.grade}
                </span>
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
          <h2 className="text-center text-3xl font-bold">Cursos clave</h2>
          <CoursesKeyGrid courses={courses} />
        </Reveal>
      </section>

      <section className="section-padding">
        <Reveal className="container-shell">
          <h2 className="text-center text-3xl font-bold">Certificaciones</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {certifications.map((certification) => (
              <article key={certification.title} className="flex gap-4 rounded-2xl border border-line bg-card p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal">
                  <Award size={23} />
                </span>
                <div>
                  <h3 className="font-bold text-navy">{certification.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted">
                    <span>{certification.platform}</span>
                    <span>-</span>
                    <span>{certification.year}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{certification.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
