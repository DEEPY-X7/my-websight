import React from "react";
import {
  Braces,
  ChartNoAxesCombined,
  Database,
  NotebookPen,
  Sigma,
  SquareSigma,
  Workflow,
} from "lucide-react";

const skills = [
  { name: "Python", icon: Braces },
  { name: "Pandas", icon: Database },
  { name: "NumPy", icon: Sigma },
  { name: "Scikit-learn", icon: Workflow },
  { name: "Matplotlib", icon: ChartNoAxesCombined },
  { name: "Seaborn", icon: SquareSigma },
  { name: "Jupyter Notebook", icon: NotebookPen },
];

function SkillCard({ name, icon }) {
  return (
    <article className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-5 flex items-center gap-4 hover:shadow-xl transition">
      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center">
        {React.createElement(icon, { size: 18, className: "text-sky-400" })}
      </div>
      <h3 className="font-medium text-slate-100">{name}</h3>
    </article>
  );
}

export default function Skills() {
  return (
    <section className="section-wrap py-24">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <p className="text-slate-400 mt-2">ML-focused tools I use while building projects and experiments.</p>
      <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}
