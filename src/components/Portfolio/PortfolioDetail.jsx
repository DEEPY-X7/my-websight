import React, { useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "./portfolio-loader"; // ✅ FIXED

const PortfolioDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <div className="text-white min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-lg mb-4">❌ Project not found.</p>
          <button
            onClick={() => navigate("/portfolio")}
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
          >
            🔙 Go to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const prevProject = projects[index - 1];
  const nextProject = projects[index + 1];
  const isArrayContent = Array.isArray(project.content);
  const portfolioURL = window.location.origin + location.pathname;
  const encodedTitle = encodeURIComponent(project.title);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0d0d0d] text-white min-h-screen"
    >
      {/* 🔙 Back Header */}
      <div className="sticky top-0 z-50 bg-[#121212] border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <span className="text-xl">←</span> Go Back
          </button>
        </div>
      </div>

      {/* 🔍 Project Detail Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-10">

        {/* 🖼 Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          onError={(e) => (e.target.src = "/fallback-image.jpg")}
          className="rounded-xl mb-8 w-full object-cover max-h-[400px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* 🧠 Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="text-sm text-gray-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          📅 {project.date} — {project.tech.join(", ")}
        </motion.p>

        {/* ✍️ Content */}
        <motion.article
          className="prose prose-invert max-w-none mb-12 text-sm sm:text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {isArrayContent ? (
            project.content.map((para, idx) => <p key={idx}>{para}</p>)
          ) : (
            <p>{project.content}</p>
          )}
        </motion.article>

        {/* 🔗 Social Share */}
        <motion.div
          className="mb-12 flex flex-wrap gap-4 items-center text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-gray-500">Share:</span>
          <a
            href={`https://wa.me/?text=${encodedTitle} - ${portfolioURL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-green-400"
          >
            WhatsApp
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${portfolioURL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-400"
          >
            X (Twitter)
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${portfolioURL}&title=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-300"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* ⏮️ Prev / Next */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center text-sm gap-6 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {prevProject ? (
            <Link
              to={`/portfolio/${prevProject.slug}`}
              className="flex items-start gap-2 text-gray-400 hover:text-white transition-all hover:-translate-y-1"
            >
              <span className="text-2xl">←</span>
              <div>
                <p className="font-medium">Previous</p>
                <p className="text-xs">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/portfolio/${nextProject.slug}`}
              className="flex items-end sm:items-center gap-2 text-gray-400 hover:text-white transition-all hover:-translate-y-1 sm:ml-auto text-right"
            >
              <div>
                <p className="font-medium">Next</p>
                <p className="text-xs">{nextProject.title}</p>
              </div>
              <span className="text-2xl">→</span>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioDetail;
