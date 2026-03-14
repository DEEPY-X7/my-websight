import React from "react";
import Navbar from "../../components/Home/Navbar";

const sections = [
  {
    title: "Problem Statement",
    text: "Classify iris flowers into setosa, versicolor, and virginica classes using flower measurements.",
  },
  {
    title: "Dataset Overview",
    text: "Used the Iris dataset containing 150 samples, four numeric features, and one target class.",
  },
  {
    title: "EDA Insights",
    text: "Petal length and petal width showed stronger separation between classes than sepal features.",
  },
  {
    title: "Feature Engineering",
    text: "Standardized numeric inputs and validated class balance before train-test split.",
  },
  {
    title: "Model Used",
    text: "Logistic Regression as an interpretable baseline for multi-class classification.",
  },
  {
    title: "Evaluation Metrics",
    text: "Tracked accuracy, precision, recall, and confusion matrix across all classes.",
  },
  {
    title: "Conclusion",
    text: "This project improved my understanding of multi-class pipelines and baseline model evaluation.",
  },
];

const charts = ["Confusion Matrix", "Feature Importance", "Data Distribution"];

export default function Iris() {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen">
      <Navbar />
      <main className="section-wrap py-24">
        <h1 className="text-4xl font-bold text-slate-100">Iris Classification</h1>
        <p className="text-slate-400 mt-3">A foundational multi-class classification project.</p>

        <div className="mt-10 grid gap-5">
          {sections.map((item) => (
            <section key={item.title} className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-slate-100">{item.title}</h2>
              <p className="text-slate-300 mt-3">{item.text}</p>
            </section>
          ))}
        </div>

        <section className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-6 mt-5">
          <h2 className="text-2xl font-semibold text-slate-100">Visual Placeholders</h2>
          <div className="mt-5 grid md:grid-cols-3 gap-4">
            {charts.map((chart) => (
              <div
                key={chart}
                className="h-36 rounded-xl border border-dashed border-slate-600 bg-slate-900/60 flex items-center justify-center text-xs text-slate-400"
              >
                {chart}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
