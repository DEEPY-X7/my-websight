import React from "react";

const milestones = [
  "Started learning Python and problem solving basics",
  "Explored data analysis with Pandas and Matplotlib",
  "Built Titanic survival prediction project",
  "Experimented with Iris classification and evaluation metrics",
  "Currently exploring model comparison and feature engineering",
];

function TimelineItem({ item, index }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-sky-400 mt-1" />
        {index !== milestones.length - 1 && <div className="w-px flex-1 bg-slate-700" />}
      </div>
      <p className="text-slate-300 pb-6">{item}</p>
    </div>
  );
}

export default function LearningJourneySection() {
  return (
    <section className="section-wrap py-16">
      <h2 className="text-3xl font-semibold">Learning Journey</h2>
      <p className="text-slate-400 mt-2">A practical timeline of how my ML learning is progressing.</p>
      <div className="surface-card p-6 mt-7">
        {milestones.map((item, index) => <TimelineItem key={item} item={item} index={index} />)}
      </div>
    </section>
  );
}
