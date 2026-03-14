import React from "react";
import ProjectGrid from "./ProjectGrid";

export default function PortfolioSection() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Machine Learning Projects</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          End-to-end ML project cards with dataset understanding, feature engineering, and measurable model performance.
        </p>
        <ProjectGrid />
      </div>
    </section>
  );
}
