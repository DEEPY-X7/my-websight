import React from "react";
import { ArrowRight, Github, Mail, LineChart } from "lucide-react";

const stats = [
  { label: "ML Projects", value: "5+" },
  { label: "GitHub Repos", value: "20+" },
  { label: "Learning Focus", value: "Python + ML" },
];

export default function HeroSection() {
  return (
    <section id="home" className="section-wrap py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-sky-300 text-sm mb-3">BCA Student • Machine Learning Learner</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Building Machine Learning Projects and Exploring Intelligent Systems
        </h1>
        <p className="text-slate-300 mt-5 max-w-xl">
          I’m learning machine learning by shipping small projects, writing down lessons, and iterating on real datasets.
          My focus is Python, data analysis, and predictive modeling workflows.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="px-5 py-2.5 rounded-lg bg-sky-500 text-slate-950 text-sm font-semibold hover:bg-sky-400 transition">View Projects</a>
          <a href="https://github.com/DEEPY-X7" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg border border-sky-300/30 text-sm inline-flex items-center gap-2 hover:border-sky-300">
            <Github size={16} /> GitHub
          </a>
          <a href="#contact" className="px-5 py-2.5 rounded-lg border border-slate-600 text-sm inline-flex items-center gap-2 hover:border-slate-400">
            <Mail size={16} /> Contact
          </a>
        </div>
      </div>

      <div className="surface-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Learning Dashboard</h2>
          <LineChart size={18} className="text-cyan-300" />
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-slate-900 rounded-xl p-4 border border-slate-700/70">
              <p className="text-xl font-semibold text-sky-300">{s.value}</p>
              <p className="text-xs text-slate-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-slate-900 p-4 border border-slate-700/70">
          <p className="text-xs text-slate-400 mb-2">Current sprint</p>
          <p className="text-sm text-slate-200">Improving model evaluation understanding: confusion matrix, precision/recall trade-off, and feature importance.</p>
          <span className="inline-flex items-center gap-1 text-xs text-cyan-300 mt-3">Weekly progress notes <ArrowRight size={14} /></span>
        </div>
      </div>
    </section>
  );
}
