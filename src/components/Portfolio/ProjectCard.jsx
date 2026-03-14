import React from "react";
import { Link } from "react-router-dom";
import { Database, FlaskConical, Wrench } from "lucide-react";

export default function ProjectCard({ title, desc, tech = [], slug, image, links = {}, dataset, modelUsed }) {
  return (
    <article className="surface-card p-5 hover:-translate-y-1 transition-transform">
      <Link to={`/projects/${slug}`} className="block group">
        {image && <img src={image} alt={title} loading="lazy" className="w-full h-44 object-cover rounded-xl mb-4 opacity-90 group-hover:opacity-100 transition" />}
        <h3 className="text-xl font-semibold group-hover:text-sky-300 transition">{title}</h3>
        <p className="text-sm text-slate-300 mt-2">{desc}</p>

        <div className="text-xs text-slate-400 mt-4 space-y-2">
          <p className="flex gap-2"><Database size={14} className="text-sky-300" /> Dataset: {dataset || "Public ML dataset"}</p>
          <p className="flex gap-2"><FlaskConical size={14} className="text-sky-300" /> Model: {modelUsed || "Baseline model"}</p>
          <p className="flex gap-2"><Wrench size={14} className="text-sky-300" /> Tools: {tech.join(", ")}</p>
        </div>
      </Link>

      <div className="mt-5 flex gap-3 text-sm">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg border border-slate-600 hover:border-sky-300">
            GitHub
          </a>
        )}
        <Link to={`/projects/${slug}`} className="px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 hover:bg-sky-400">
          Details
        </Link>
      </div>
    </article>
  );
}
