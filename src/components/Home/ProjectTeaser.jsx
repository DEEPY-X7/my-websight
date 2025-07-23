import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Auto-load latest project meta info
const projects = Object.values(
  import.meta.glob("../Portfolio/portfolio-content/**/meta.js", { eager: true })
).map((mod) => mod.default);

const ProjectHighlight = () => {
  const latestProjects = [...projects]
    .filter((p) => p?.title && p?.slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4); // ✅ Show latest 4 only

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* 🎯 Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10"
      >
        🧠 Featured Projects
      </motion.h2>

      <p className="text-center text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-10 sm:mb-12 px-4">
        Showcasing code that speaks design, and design that speaks for itself.
      </p>

      {/* 🧱 Project Grid */}
      <div
        className={`max-w-6xl mx-auto px-4 grid gap-6 sm:gap-8
          ${
            latestProjects.length === 1
              ? "grid-cols-1 justify-items-center"
              : latestProjects.length === 2
              ? "grid-cols-1 sm:grid-cols-2 justify-items-center"
              : latestProjects.length === 3
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          }
        `}
      >
        {latestProjects.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">
            No projects available right now.
          </p>
        ) : (
          latestProjects.map((proj, index) => (
            <motion.div
              key={proj.slug}
              animate={{ y: [0, -6, 0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              className="w-full h-full"
            >
              <Link
                to={`/portfolio/${proj.slug}`}
                className="group block h-full rounded-xl overflow-hidden border border-gray-700 backdrop-blur-sm bg-white/5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {/* 📸 Project Image */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  onError={(e) => (e.target.src = "/fallback-image.jpg")}
                  className="w-full h-44 sm:h-52 object-cover grayscale group-hover:grayscale-0 transition duration-700"
                />

                {/* 📄 Project Content */}
                <div className="p-4 flex flex-col gap-3">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-3">
                    {typeof proj.desc === "string"
                      ? proj.desc.slice(0, 120) + "..."
                      : "Read more..."}
                  </p>
                  <p className="text-[10px] sm:text-xs text-right text-gray-500">
                    {proj.date}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))
        )}
      </div>

      {/* 🔗 See All Projects */}
      <div className="text-center mt-10 sm:mt-12">
        <Link
          to="/portfolio"
          className="text-blue-400 text-sm sm:text-base hover:underline"
        >
          See All Projects →
        </Link>
      </div>
    </section>
  );
};

export default ProjectHighlight;
