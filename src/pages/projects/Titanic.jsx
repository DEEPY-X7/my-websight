import React from "react";
import Navbar from "../../components/Home/Navbar";

const sections = [
  {
    title: "Problem Statement",
    text: "Predict whether a passenger survived the Titanic disaster using demographic and ticket-related features.",
  },
  {
    title: "Dataset Explanation",
    text: "Kaggle Titanic dataset with columns such as age, gender, passenger class, fare, embarked port, and survival label.",
  },
  {
    title: "EDA Insights",
    text: "Survival rates were higher for female passengers and for higher ticket classes. Missing values required careful handling.",
  },
  {
    title: "Feature Engineering",
    text: "Encoded categorical fields, handled missing values, and created model-ready numerical features.",
  },
  {
    title: "Model Used",
    text: "Logistic Regression baseline with train-test split and standardized preprocessing pipeline.",
  },
  {
    title: "Evaluation Metrics",
    text: "Accuracy, precision, recall, and confusion matrix were used to understand model performance.",
  },
  {
    title: "Conclusion",
    text: "This project helped me learn end-to-end ML workflow from data cleaning to model interpretation.",
  },
];

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
