import React from "react";
import { FaPython, FaChartBar, FaDatabase } from "react-icons/fa";
import { SiPandas, SiNumpy, SiScikitlearn, SiJupyter } from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "Pandas", icon: <SiPandas className="text-blue-300" /> },
  { name: "NumPy", icon: <SiNumpy className="text-cyan-300" /> },
  { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-300" /> },
  { name: "Matplotlib", icon: <FaChartBar className="text-blue-400" /> },
  { name: "Seaborn", icon: <FaDatabase className="text-indigo-300" /> },
  { name: "Jupyter Notebook", icon: <SiJupyter className="text-orange-400" /> },
];

const StackIcons = () => (
  <section className="pt-8 pb-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-10">
        ML & Data Science Toolkit
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
        {techStack.map((tech, index) => (
          <motion.div key={index} className="flex flex-col items-center gap-2 text-center" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}>
            <div className="text-5xl">{tech.icon}</div>
            <p className="text-sm text-gray-300">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StackIcons;
