import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, desc, tech = [], slug, image, links = {}, results }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-xl border border-blue-500/20">
      <Link to={`/projects/${slug}`} className="block group">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{desc}</p>
        {results && <p className="text-sm text-blue-300 mb-3">Result: {results}</p>}
        <ul className="flex flex-wrap gap-2 text-xs text-gray-300">
          {tech.map((tool, i) => <li key={i} className="bg-gray-800 px-2 py-1 rounded">{tool}</li>)}
        </ul>
      </Link>

      <div className="mt-4 text-sm text-blue-400">
        {links.github && <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
      </div>
    </div>
  );
}
