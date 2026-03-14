import React from "react";
import ProjectGrid from "./ProjectGrid";

export default function PortfolioSection() {
  return (
    <section className="py-16 px-4 text-white bg-[#0F172A]">
      <div className="section-wrap">
        <h1 className="text-4xl font-bold text-center">Machine Learning Projects</h1>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mt-3 mb-10">
          Each project includes the problem statement, dataset context, feature engineering decisions, and evaluation notes.
        </p>
        <ProjectGrid />
      </div>
    </section>
  );
}
