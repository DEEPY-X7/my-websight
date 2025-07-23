import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  description,
  stack = [],
  slug,
  image,
  links = {},
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition w-full max-w-full sm:max-w-md md:max-w-full">
      {/* 🔗 Clickable full card */}
      <Link to={`/portfolio/${slug}`} className="block group">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4 grayscale group-hover:grayscale-0 transition duration-700"
          />
        )}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 text-xs text-gray-400">
          {stack.map((tech, i) => (
            <li key={i} className="bg-gray-800 px-2 py-1 rounded">
              {tech}
            </li>
          ))}
        </ul>
      </Link>

      {/* 🔗 External Links (optional) */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-blue-400">
        {links.live && (
          <a href={links.live} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        {links.caseStudy && (
          <a href={links.caseStudy} target="_blank" rel="noopener noreferrer">
            Case Study
          </a>
        )}
      </div>
    </div>
  );
}
