import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "./portfolio-loader"; // ✅ Auto-loaded portfolio

const PortfolioPage = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 text-white">
      {/* ✅ Heading with animation */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        My Full Portfolio Showcase
      </motion.h2>

      {/* ✅ Responsive Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {projects
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // 🔁 Newest first
          .map((proj, index) => (
            <motion.div
              key={proj.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group w-full max-w-sm rounded-xl border px-4 py-5 backdrop-blur-sm transform hover:-translate-y-1 transition-all bg-white/5 border-gray-700"
            >
              <Link to={`/portfolio/${proj.slug}`} className="block">
                {/* ✅ Image with grayscale hover */}
                <motion.img
                  src={proj.image}
                  alt={proj.title}
                  onError={(e) => (e.target.src = "/fallback-image.jpg")}
                  className="w-full h-48 object-cover rounded-md mb-4 grayscale group-hover:grayscale-0 transition duration-700"
                />

                {/* ✅ Project Info */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold group-hover:text-blue-300 transition">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {proj.desc}
                  </p>

                  {/* ✅ Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
