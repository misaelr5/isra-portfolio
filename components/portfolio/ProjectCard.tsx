import { ArrowRight, Github, Sparkles } from "lucide-react";
import Image from "next/image";
import type { Project } from "./data";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-card transition duration-500 ease-out hover:border-teal">
      <div className="relative aspect-video overflow-hidden">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        {!featured ? (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-teal/90 px-3 py-1 text-xs font-semibold text-white">
            <Sparkles size={13} />
            {project.category}
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <h2 className="text-lg font-bold leading-snug text-navy">{project.title}</h2>
        <p className="mt-3 min-h-16 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className={`mt-5 flex items-center gap-5 ${featured ? "justify-start" : "justify-center"}`}>
          {featured ? (
            <a className="inline-flex items-center gap-1 text-sm font-semibold text-teal" href="/projects">
              Ver detalles
              <ArrowRight size={15} />
            </a>
          ) : null}
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-teal" href="#">
            <Github size={16} />
            Código fuente
          </a>
        </div>
      </div>
    </article>
  );
}
