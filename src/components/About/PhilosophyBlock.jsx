import React from "react";

const philosophyPoints = [
  "Great ML systems start with clean and trustworthy data.",
  "A simple baseline model is better than an unvalidated complex model.",
  "Error analysis is where real model improvement begins.",
  "Explainability matters when building systems for real users.",
];

export default function PhilosophyBlock() {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">ML Principles I Follow</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {philosophyPoints.map((line) => (
            <div key={line} className="text-center text-gray-300 text-base leading-relaxed max-w-md">“{line}”</div>
          ))}
        </div>
      </div>
    </section>
  );
}
