import React from "react";
import { ArrowUpRight, BrainCircuit, Github, Mail } from "lucide-react";

const highlights = [
  "Feature engineering practice",
  "Model evaluation with clear metrics",
  "Learning logs from every experiment",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="section-wrap py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center [animation:heroFade_0.8s_ease-out]"
    >
      <div>
        <p className="text-sky-400 text-sm mb-3">BCA Student • Machine Learning Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-100">
          Building Machine Learning Projects and Exploring Intelligent Systems
        </h1>
        <p className="text-slate-300 mt-5 max-w-xl text-base">
          BCA student learning machine learning, data analysis and predictive modeling using Python.
        </p>
        <p className="mt-5 text-sm text-slate-300 leading-relaxed">
          <span className="text-slate-100 font-semibold">3 Machine Learning Projects Built</span>
          <br />
          Python • Pandas • Scikit-learn
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-5 py-3 rounded-xl bg-sky-400 text-slate-950 text-sm font-semibold hover:bg-sky-300 transition"
          >
            View Projects
          </a>
          <a
            href="https://github.com/DEEPY-X7"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl border border-slate-600 text-sm inline-flex items-center gap-2 hover:border-sky-400 hover:text-sky-300 transition"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-xl border border-slate-600 text-sm inline-flex items-center gap-2 hover:border-sky-400 hover:text-sky-300 transition"
          >
            <Mail size={16} /> Contact
          </a>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-6 md:p-7">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-slate-100">Current ML Focus</h2>
          <BrainCircuit size={20} className="text-sky-400" />
        </div>

        <div className="space-y-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="bg-slate-900/70 border border-slate-700 rounded-xl p-4 flex items-center justify-between"
            >
              <p className="text-sm text-slate-200">{item}</p>
              <ArrowUpRight size={15} className="text-cyan-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
