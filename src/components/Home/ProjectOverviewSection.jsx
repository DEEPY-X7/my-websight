import React from "react";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectOverviewSection() {
  return (
    <section id="projects" className="section-wrap py-24">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="text-slate-400 mt-2">
        Hands-on machine learning projects with clear problem statements, datasets, models, metrics, and tools.
      </p>
      <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
