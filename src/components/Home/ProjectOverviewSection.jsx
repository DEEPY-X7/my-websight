import React from "react";
import { Database, FlaskConical, Wrench } from "lucide-react";
import projects from "../Portfolio/portfolio-loader";

function ProjectCard({ project }) {
  return (
    <article className="surface-card p-5 hover:-translate-y-1 transition-transform">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-slate-300 mt-2">{project.desc}</p>
      <div className="mt-4 space-y-2 text-sm">
        <p className="flex items-start gap-2 text-slate-300"><Database size={15} className="text-sky-300 mt-0.5" />Dataset: {project.dataset}</p>
        <p className="flex items-start gap-2 text-slate-300"><FlaskConical size={15} className="text-sky-300 mt-0.5" />Model: {project.modelUsed}</p>
        <p className="flex items-start gap-2 text-slate-300"><Wrench size={15} className="text-sky-300 mt-0.5" />Tools: {project.tech.join(", ")}</p>
      </div>
      <div className="mt-5 flex gap-3 text-sm">
        <a className="px-3 py-1.5 rounded-lg border border-slate-600 hover:border-sky-300" href={project.links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 hover:bg-sky-400" href={`/projects/${project.slug}`}>Details</a>
      </div>
    </article>
  );
}

export default function ProjectOverviewSection() {
  return (
    <section id="projects" className="section-wrap py-16">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="text-slate-400 mt-2">Hands-on projects built while learning core ML workflows from data cleaning to evaluation.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
