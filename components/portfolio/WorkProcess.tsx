import { MessageSquare, PenLine, Rocket, Search } from "lucide-react";
import { Reveal } from "@/components/portfolio/Reveal";
import { SplitHeading } from "@/components/portfolio/SplitHeading";

const steps = [
  {
    title: "Consulta",
    text: "Nos contás el objetivo, plazos y referencias. Definimos alcance y prioridades.",
    icon: MessageSquare
  },
  {
    title: "Propuesta",
    text: "Te devolvemos una propuesta clara: qué incluye, tiempos estimados y próximos pasos.",
    icon: PenLine
  },
  {
    title: "Desarrollo",
    text: "Diseñamos y construimos con revisiones cortas para validar avances.",
    icon: Rocket
  },
  {
    title: "Entrega",
    text: "Publicamos, revisamos rendimiento básico y te dejamos el sitio listo para usar.",
    icon: Search
  }
];

export function WorkProcess() {
  return (
    <Reveal className="section-padding bg-[#F7F4EE]">
      <section>
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <SplitHeading as="h2" className="text-3xl font-bold text-navy" text="Cómo trabajamos" />
          <p className="mt-4 leading-8 text-muted">Un proceso simple para que sepas qué esperar desde el primer mensaje hasta la entrega.</p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="rounded-2xl border border-line bg-card p-6">
                <span className="text-sm font-semibold text-orange">Paso {index + 1}</span>
                <Icon className="mt-4 text-teal" size={28} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
    </Reveal>
  );
}
