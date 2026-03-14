import React from "react";
import { BarChart3, ChartColumnBig, Grid3X3 } from "lucide-react";

const insightCards = [
  {
    title: "Feature Importance",
    icon: BarChart3,
    desc: "Shows which features influence model predictions the most.",
  },
  {
    title: "Confusion Matrix",
    icon: Grid3X3,
    desc: "Visual summary of correct and incorrect classification predictions.",
  },
  {
    title: "Data Distribution",
    icon: ChartColumnBig,
    desc: "Compares spread and balance of important variables in the dataset.",
  },
];

export default function MLInsights() {
  return (
    <section className="section-wrap py-24">
      <h2 className="text-3xl font-semibold">Machine Learning Insights</h2>
      <p className="text-slate-400 mt-2">Visual exploration of datasets and model results.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {insightCards.map(({ title, icon, desc }) => (
          <article
            key={title}
            className="bg-slate-800 rounded-xl border border-slate-700 shadow-lg p-5 hover:shadow-xl transition"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center">
              {React.createElement(icon, { size: 18, className: "text-sky-400" })}
            </div>
            <h3 className="mt-4 font-semibold text-slate-100">{title}</h3>
            <p className="text-sm text-slate-400 mt-2">{desc}</p>
            <div className="mt-5 h-28 rounded-xl border border-dashed border-slate-600 bg-slate-900/60 flex items-center justify-center text-xs text-slate-500">
              Chart placeholder
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
