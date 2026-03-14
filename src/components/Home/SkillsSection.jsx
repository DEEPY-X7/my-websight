import React from "react";

const skills = [
  ["Python", "Comfortable with scripting and data workflows"],
  ["Pandas", "Used for cleaning and exploratory analysis"],
  ["NumPy", "Numeric operations and feature prep"],
  ["Scikit-Learn", "Classification/regression experimentation"],
  ["Matplotlib", "Basic model and data visualizations"],
  ["Seaborn", "EDA plots and trend comparisons"],
  ["Jupyter Notebook", "Project notes and reproducible experiments"],
];

function SkillCard({ name, summary }) {
  return (
    <article className="surface-card p-4">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-slate-400 mt-2">{summary}</p>
      <div className="h-1 bg-slate-800 rounded mt-4">
        <div className="h-full bg-gradient-to-r from-sky-400 to-cyan-400 rounded" style={{ width: "62%" }} />
      </div>
      <p className="text-[11px] text-slate-500 mt-1">Actively improving</p>
    </article>
  );
}

export default function SkillsSection() {
  return (
    <section className="section-wrap py-16">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <p className="text-slate-400 mt-2">Core tools I use in coursework and personal ML projects.</p>
      <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map(([name, summary]) => <SkillCard key={name} name={name} summary={summary} />)}
      </div>
    </section>
  );
}
