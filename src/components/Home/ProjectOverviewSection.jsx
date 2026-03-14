import React from "react";
import projects from "../Portfolio/portfolio-loader";
import ProjectCard from "../ProjectCard";

export default function ProjectOverviewSection() {
  return (
    <section id="projects" className="section-wrap py-16">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="text-slate-400 mt-2">
        Hands-on machine learning projects with clear datasets, model choices, and tools used.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
