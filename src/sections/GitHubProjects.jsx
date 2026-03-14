import React from "react";
import { Github } from "lucide-react";

const repos = [
  {
    name: "Titanic ML project",
    description: "Binary classification workflow with preprocessing, EDA, and logistic regression.",
    link: "https://github.com/DEEPY-X7",
  },
  {
    name: "Iris classification project",
    description: "Multi-class model training and evaluation on the Iris dataset.",
    link: "https://github.com/DEEPY-X7",
  },
];

export default function GitHubProjects() {
  return (
    <section className="section-wrap py-24">
      <h2 className="text-3xl font-semibold">Recent GitHub Projects</h2>
      <p className="text-slate-400 mt-2">Repository snapshots from my current machine learning practice.</p>
      <div className="mt-7 grid md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.link}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-5 hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-slate-100">{repo.name}</h3>
            <p className="text-sm text-slate-400 mt-2">{repo.description}</p>
            <span className="text-sm text-sky-300 mt-4 inline-flex items-center gap-2">
              <Github size={15} /> GitHub link
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
