import React from "react";
import { Link } from "react-router-dom";
import { Target, Database, FlaskConical, Wrench } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-5 md:p-6 hover:shadow-xl hover:shadow-sky-500/10 transition">
      <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
      <p className="text-sm text-slate-300 mt-2">{project.description}</p>

      <div className="mt-4 space-y-2 text-sm text-slate-300">
        <p className="flex items-start gap-2">
          <Target size={15} className="text-sky-400 mt-0.5" />
          <span>
            <span className="text-slate-100">Problem:</span> {project.problem}
          </span>
        </p>
        <p className="flex items-start gap-2">
          <Database size={15} className="text-sky-400 mt-0.5" />
          <span>
            <span className="text-slate-100">Dataset:</span> {project.dataset}
          </span>
        </p>
        <p className="flex items-start gap-2">
          <FlaskConical size={15} className="text-sky-400 mt-0.5" />
          <span>
            <span className="text-slate-100">Model:</span> {project.model}
          </span>
        </p>
        <p className="flex items-start gap-2">
          <Wrench size={15} className="text-sky-400 mt-0.5" />
          <span>
            <span className="text-slate-100">Tools:</span> {project.tools.join(", ")}
          </span>
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a
          className="px-4 py-2 rounded-lg border border-slate-600 hover:border-sky-400 hover:text-sky-300 transition"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <Link
          to={project.details}
          className="px-4 py-2 rounded-lg bg-sky-400 text-slate-950 font-medium hover:bg-sky-300 transition"
        >
          Details
        </Link>
      </div>
    </article>
  );
}
