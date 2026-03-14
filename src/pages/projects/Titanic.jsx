import React from "react";
import Navbar from "../../components/Home/Navbar";

const sections = [
  {
    title: "Problem Statement",
    text: "Predict whether a passenger survived the Titanic disaster using available passenger attributes.",
  },
  {
    title: "Dataset Overview",
    text: "Used the Kaggle Titanic dataset with passenger demographics, ticket details, and survival labels.",
  },
  {
    title: "EDA Insights",
    text: "Passenger class, fare band, and gender showed noticeable patterns related to survival probability.",
  },
  {
    title: "Feature Engineering",
    text: "Handled missing values, encoded categorical columns, and scaled selected numeric inputs.",
  },
  {
    title: "Model Used",
    text: "Logistic Regression was chosen as an interpretable baseline for binary classification.",
  },
  {
    title: "Evaluation Metrics",
    text: "Measured performance using accuracy, precision, recall, and confusion matrix analysis.",
  },
  {
    title: "Conclusion",
    text: "This project helped me understand end-to-end binary classification workflow and model validation.",
  },
];

const charts = ["Confusion Matrix", "Feature Importance", "Data Distribution"];

export default function Titanic() {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen">
      <Navbar />
      <main className="section-wrap py-24">
        <h1 className="text-4xl font-bold text-slate-100">Titanic Survival Prediction</h1>
        <p className="text-slate-400 mt-3">A beginner-friendly binary classification project.</p>

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
