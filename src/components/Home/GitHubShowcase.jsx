import React from "react";

const repos = [
  { name: "Titanic ML Project", description: "Binary classification pipeline with feature engineering and Logistic Regression baseline.", link: "https://github.com/DEEPY-X7" },
  { name: "Iris Classification Project", description: "Multi-class classification using scikit-learn with decision boundary analysis.", link: "https://github.com/DEEPY-X7" },
];

const metrics = [
  { label: "Titanic Accuracy", value: 82 },
  { label: "Iris Accuracy", value: 96 },
  { label: "Churn ROC-AUC", value: 88 },
];

export default function GitHubShowcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-300">GitHub ML Repository Showcase</h2>
          <div className="space-y-4">
            {repos.map((repo) => (
              <a key={repo.name} href={repo.link} target="_blank" rel="noreferrer" className="block p-5 rounded-xl border border-blue-500/30 bg-white/5 hover:bg-white/10">
                <h3 className="font-semibold">{repo.name}</h3>
                <p className="text-sm text-gray-300 mt-2">{repo.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Major change: lightweight built-in chart to keep the portfolio visual and fast without external chart libs. */}
        <div className="bg-white/5 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6">Model Performance Snapshot</h3>
          <div className="space-y-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="flex justify-between text-sm mb-1 text-gray-300">
                  <span>{metric.label}</span>
                  <span>{metric.value}%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${metric.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
