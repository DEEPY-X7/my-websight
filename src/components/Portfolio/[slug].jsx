import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import projects from "./portfolio-loader"; // ✅ Central auto-loader

const PortfolioSlugPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold mb-4">❌ Project Not Found</h1>
        <p className="text-gray-400 mb-4">
          No project was found for <code className="text-red-400">{slug}</code>.
        </p>
        <Link to="/portfolio" className="text-blue-400 underline">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <Helmet>
        <title>{project.title} | Portfolio - Mr. Deepu Ji</title>
        <meta name="description" content={project.desc} />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-400 text-sm mb-4">📅 {project.date}</p>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            onError={(e) => {
              e.currentTarget.src = "/fallback-image.jpg";
              e.currentTarget.alt = "Image not found";
            }}
            className="w-full rounded-lg mb-6"
          />
        )}

        <p className="text-gray-300 mb-4">{project.desc}</p>

        {project.content && (
          <div className="prose prose-invert max-w-none mb-6">
            {typeof project.content === "string"
              ? <p>{project.content}</p>
              : project.content}
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-400 underline mb-6"
          >
            🔗 Visit Live Project
          </a>
        )}

        {Array.isArray(project.tech) && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioSlugPage;
