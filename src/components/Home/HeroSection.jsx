import React from "react";
import { Download, Github, Network, Sparkles } from "lucide-react";

const neuralPoints = [
  "left-8 top-10",
  "left-24 top-20",
  "left-14 top-36",
  "right-20 top-14",
  "right-10 top-32",
  "right-28 bottom-16",
  "left-24 bottom-12",
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
            href="/resume.pdf"
            className="px-5 py-3 rounded-xl border border-slate-600 text-sm inline-flex items-center gap-2 hover:border-sky-400 hover:text-sky-300 transition"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>

      <div className="relative bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-6 md:p-7 min-h-80 overflow-hidden">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-slate-100">Neural Network Visual</h2>
          <Sparkles size={20} className="text-sky-400" />
        </div>

        <div className="relative h-64 rounded-xl bg-slate-900/80 border border-slate-700">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220" fill="none" aria-hidden="true">
            <path d="M56 50L154 84L268 60L346 120" stroke="#22D3EE" strokeOpacity="0.4" />
            <path d="M56 50L148 154L260 158L340 104" stroke="#38BDF8" strokeOpacity="0.4" />
            <path d="M56 148L154 84L260 158L346 120" stroke="#38BDF8" strokeOpacity="0.3" />
          </svg>
          {neuralPoints.map((point) => (
            <span
              key={point}
              className={`absolute ${point} w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.6)]`}
            />
          ))}
          <div className="absolute left-4 bottom-4 text-xs text-slate-400 inline-flex items-center gap-2">
            <Network size={14} className="text-cyan-300" />
            Abstract ML graph placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
