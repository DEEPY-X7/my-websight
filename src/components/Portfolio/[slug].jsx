import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import projects from "./portfolio-loader";

const sections = [
  "problemStatement",
  "dataset",
  "eda",
  "featureEngineering",
  "modelUsed",
  "evaluationMetrics",
  "resultsDetail",
];

const labels = {
  problemStatement: "Problem Statement",
  dataset: "Dataset Description",
  eda: "EDA",
  featureEngineering: "Feature Engineering",
  modelUsed: "Model Used",
  evaluationMetrics: "Evaluation Metrics",
  resultsDetail: "Results",
};

const PortfolioSlugPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Project not found.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <Helmet>
        <title>{project.title} | ML Project</title>
        <meta name="description" content={project.desc} />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <Link to="/projects" className="text-blue-400 underline">← Back to Projects</Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">{project.title}</h1>
        <p className="text-blue-300 mb-6">{project.results}</p>
        <img src={project.image} alt={project.title} className="w-full rounded-lg mb-6" />

        {sections.map((key) => (
          <section key={key} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{labels[key]}</h2>
            <p className="text-gray-300">{project[key]}</p>
          </section>
        ))}

        {project.links?.github && (
          <a href={project.links.github} target="_blank" rel="noreferrer" className="text-blue-400 underline">
            View GitHub Repository
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioSlugPage;
