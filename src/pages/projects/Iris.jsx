import React from "react";
import Navbar from "../../components/Home/Navbar";

const sections = [
  {
    title: "Problem Statement",
    text: "Classify iris flowers into setosa, versicolor, and virginica classes using sepal and petal measurements.",
  },
  {
    title: "Dataset Explanation",
    text: "Classic Iris dataset containing 150 samples with four numerical features and one target class label.",
  },
  {
    title: "EDA Insights",
    text: "Petal features separate classes better than sepal features, making them highly informative for classification.",
  },
  {
    title: "Feature Engineering",
    text: "Scaled numeric features and verified class balance before training and validation.",
  },
  {
    title: "Model Used",
    text: "Logistic Regression as a simple and interpretable baseline model for multi-class classification.",
  },
  {
    title: "Evaluation Metrics",
    text: "Accuracy score, precision/recall, and confusion matrix across all three classes.",
  },
  {
    title: "Conclusion",
    text: "This project strengthened my understanding of multi-class ML pipelines and model evaluation.",
  },
];

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
              <div className="mt-5 h-36 rounded-xl border border-dashed border-slate-600 bg-slate-900/60 flex items-center justify-center text-xs text-slate-500">
                Placeholder chart
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
