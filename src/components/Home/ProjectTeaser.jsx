import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = Object.values(import.meta.glob("../Portfolio/portfolio-content/**/meta.js", { eager: true })).map((mod) => mod.default);

const ProjectHighlight = () => {
  const latestProjects = [...projects].filter((p) => p?.title && p?.slug).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-6 px-4">
        Featured ML Projects
      </motion.h2>
      <p className="text-center text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-12 px-4">
        Predictive modeling projects focused on classification, regression, and applied machine learning workflows.
      </p>

      <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {latestProjects.map((proj) => (
          <Link key={proj.slug} to={`/projects/${proj.slug}`} className="group block rounded-xl overflow-hidden border border-blue-500/20 bg-white/5 hover:-translate-y-1 transition">
            <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-xs text-gray-300 line-clamp-3">{proj.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/projects" className="text-blue-400 hover:underline">See All ML Projects →</Link>
      </div>
    </section>
  );
};

export default ProjectHighlight;
