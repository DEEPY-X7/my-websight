import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./portfolio-loader"; // 🔁 Auto-loaded meta + content

export default function ProjectGrid() {
  // ✅ Filter out projects missing required fields
  const validProjects = projects.filter(
    (p) => p?.title && p?.slug && p?.image && p?.date
  );

  // 🔁 Optional: Sort projects by most recent date
  const sortedProjects = validProjects.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
}
