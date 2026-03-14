import React from "react";
import Navbar from "../components/Home/Navbar";
import FooterCTA from "../components/Home/FooterCTA";

const focusAreas = [
  {
    title: "Predictive Modeling",
    summary:
      "Applying regression and classification workflows for practical datasets like housing prices, customer churn, and survival prediction.",
  },
  {
    title: "Model Evaluation",
    summary:
      "Comparing precision, recall, F1-score, ROC-AUC, and confusion matrices to select models beyond headline accuracy.",
  },
  {
    title: "Data-Centric Iteration",
    summary:
      "Improving model outcomes through data cleaning, feature engineering, and error analysis instead of only tuning algorithms.",
  },
];

export default function Research() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
        <section className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-blue-300">Research Mindset</h1>
          <p className="text-gray-300 mb-10">
            I approach ML projects like mini research cycles: define the problem, inspect data quality,
            test baseline models, and document why one approach performs better than another.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <article key={area.title} className="bg-white/5 border border-blue-500/30 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-3">{area.title}</h2>
                <p className="text-sm text-gray-300">{area.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  );
}
