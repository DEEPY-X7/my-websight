import React from "react";

const journeyItems = [
  { year: "2024", text: "Started learning Python" },
  { year: "2025", text: "Learned Data Analysis with Pandas" },
  { year: "2026", text: "Built Titanic ML model" },
  { year: "2026", text: "Exploring machine learning algorithms" },
];

function TimelineItem({ year, text, isLast }) {
  return (
    <div className="relative pl-8 pb-7">
      <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-sky-400" />
      {!isLast && <span className="absolute left-[5px] top-5 w-px h-full bg-slate-700" />}
      <p className="text-sm text-sky-300 font-medium">{year}</p>
      <p className="text-slate-300 mt-1">{text}</p>
    </div>
  );
}

export default function LearningJourney() {
  return (
    <section className="section-wrap py-16">
      <h2 className="text-3xl font-semibold">Learning Journey</h2>
      <p className="text-slate-400 mt-2">My progress while learning machine learning.</p>

      <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-6">
        {journeyItems.map((item, index) => (
          <TimelineItem
            key={`${item.year}-${item.text}`}
            year={item.year}
            text={item.text}
            isLast={index === journeyItems.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
