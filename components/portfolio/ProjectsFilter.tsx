"use client";

import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/portfolio/Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects, type Project } from "./data";
import { buttonHover } from "@/components/portfolio/motion";

const filters: Array<"Todos" | Project["category"]> = ["Todos", "Web", "Tiendas", "Apps", "Modulos", "AI & ML", "CiberSeguridad"];

export function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter = activeFilter === "Todos" || project.category === activeFilter;
      const searchable = `${project.title} ${project.description} ${project.tags.join(" ")}`.toLowerCase();
      return matchesFilter && searchable.includes(normalized);
    });
  }, [activeFilter, query]);

  return (
    <>
      <Reveal className="container-shell mt-14" delay={60}>
        <section className="service-panel-card rounded-2xl bg-card p-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 xl:overflow-visible xl:pb-0">
              <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-navy">
                <Filter size={17} className="text-teal" />
                Filtro:
              </span>
              {filters.map((filter) => {
                const active = activeFilter === filter;
                return (
                  <motion.button
                    key={filter}
                    className={`shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold transition-colors ${
                      active ? "bg-teal text-white" : "border border-line text-muted hover:text-navy"
                    }`}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    {...buttonHover}
                  >
                    {filter}
                  </motion.button>
                );
              })}
            </div>
            <label className="relative block xl:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" size={18} />
              <input
                className="w-full rounded-xl border border-line bg-page py-3 pl-11 pr-4 text-navy placeholder:text-faint focus:border-teal focus:outline-none"
                placeholder="Buscar proyectos..."
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
          </div>
        </section>
      </Reveal>
      <Reveal className="container-shell" delay={120}>
        <section className="grid gap-6 py-14 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length === 0 ? (
            <p className="service-text-pop service-text-pop-2 col-span-full rounded-2xl border border-line bg-card p-8 text-center text-muted">
              No hay proyectos con ese filtro. Probá otra categoría o limpiá la búsqueda.
            </p>
          ) : (
            filteredProjects.map((project) => <ProjectCard key={project.title} project={project} />)
          )}
        </section>
      </Reveal>
    </>
  );
}
