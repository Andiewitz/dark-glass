"use client";

import React from "react";
import { motion } from "motion/react";

export interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative overflow-hidden rounded-[24px] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_32px_64px_-12px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_32px_64px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(255,255,255,0.03)] ${className ?? ""}`}
    >
      <figure className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </figure>

      <div className="p-6">
        <h3 className="text-lg font-semibold tracking-wide text-white/90">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/50">
          {project.description}
        </p>

        {project.href ? (
          <div className="mt-4">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/20"
            >
              View Project
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export { ProjectCard as Component };
