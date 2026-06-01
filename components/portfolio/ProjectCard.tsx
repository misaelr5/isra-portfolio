"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "./data";
import { buttonHover, cardHover, scaleIn } from "@/components/portfolio/motion";

const MotionLink = motion(Link);

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-line bg-card"
      initial="hidden"
      variants={scaleIn}
      viewport={{ once: true, amount: 0.22 }}
      whileInView="visible"
      {...cardHover}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        {!featured ? (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-teal/90 px-3 py-1 text-xs font-semibold text-white">
            {project.category}
          </span>
        ) : null}
      </div>
      <div className="p-4 md:p-5">
        <h2 className="text-lg font-bold leading-snug text-navy">{project.title}</h2>
        <p className="mt-3 min-h-0 text-sm leading-6 text-muted md:min-h-16">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className={`mt-5 flex flex-wrap items-center gap-3 md:gap-4 ${featured ? "justify-start" : "justify-center"}`}>
          {featured ? (
            <MotionLink className="inline-flex items-center gap-1 text-sm font-semibold text-teal" href="/projects" {...buttonHover}>
                Ver detalles
                <ArrowRight size={15} aria-hidden="true" />
              </MotionLink>
          ) : null}
          {project.demoUrl ? (
            <motion.a
              className="inline-flex items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-teal md:text-sm"
              href={project.demoUrl}
              rel="noreferrer"
              target="_blank"
              {...buttonHover}
            >
              <ExternalLink size={16} aria-hidden="true" />
              Ver demo
            </motion.a>
          ) : null}
          {project.repoUrl ? (
            <motion.a
              className="inline-flex items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-teal md:text-sm"
              href={project.repoUrl}
              rel="noreferrer"
              target="_blank"
              {...buttonHover}
            >
              <Github size={16} aria-hidden="true" />
              Código fuente
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
