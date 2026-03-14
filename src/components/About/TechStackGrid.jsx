import React from "react";
import { FaPython, FaChartBar, FaDatabase } from "react-icons/fa";
import { SiPandas, SiNumpy, SiScikitlearn, SiJupyter } from "react-icons/si";

const techStack = ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"];
const iconMap = {
  Python: <FaPython className="text-yellow-300" />,
  Pandas: <SiPandas className="text-blue-300" />,
  NumPy: <SiNumpy className="text-cyan-300" />,
  "Scikit-learn": <SiScikitlearn className="text-orange-300" />,
  Matplotlib: <FaChartBar className="text-blue-400" />,
  Seaborn: <FaDatabase className="text-indigo-300" />,
  "Jupyter Notebook": <SiJupyter className="text-orange-400" />,
};

export default function TechStackGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">ML-Focused Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {techStack.map((tech) => (
            <div key={tech} className="flex flex-col items-center gap-2">
              <div className="text-4xl">{iconMap[tech]}</div>
              <p className="text-sm text-gray-300">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
