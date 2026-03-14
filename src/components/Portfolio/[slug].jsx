import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import projects from "./portfolio-loader";
import PortfolioDetail from "./PortfolioDetail";

export default function PortfolioSlugPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  return (
    <>
      <Helmet>
        <title>{project ? `${project.title} | ML Project` : "Project | ML Portfolio"}</title>
        <meta name="description" content={project?.desc || "Machine learning project details"} />
      </Helmet>
      <PortfolioDetail />
    </>
  );
}
