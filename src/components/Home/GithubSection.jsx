import React from "react";

const repos = [
  {
    name: "Titanic ML Project",
    desc: "Binary classification project with preprocessing, EDA, and logistic regression baseline.",
    link: "https://github.com/DEEPY-X7",
  },
  {
    name: "Iris Classification",
    desc: "Multi-class classification experiment comparing KNN and tree-based models.",
    link: "https://github.com/DEEPY-X7",
  },
];

function GitHubCard({ repo }) {
  return (
    <a href={repo.link} target="_blank" rel="noreferrer" className="surface-card p-5 block hover:border-sky-300/40 transition-colors">
      <h3 className="font-semibold">{repo.name}</h3>
      <p className="text-sm text-slate-400 mt-2">{repo.desc}</p>
      <span className="text-sm text-sky-300 mt-4 inline-block">Open Repository →</span>
    </a>
  );
}

export default function GithubSection() {
  return (
    <section className="section-wrap py-16">
      <h2 className="text-3xl font-semibold">Recent GitHub Projects</h2>
      <p className="text-slate-400 mt-2">Selected repositories that reflect what I’m currently building.</p>
      <div className="mt-7 grid md:grid-cols-2 gap-4">
        {repos.map((repo) => <GitHubCard key={repo.name} repo={repo} />)}
      </div>
    </section>
  );
}
