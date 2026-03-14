import React from "react";
import { motion } from "framer-motion";
import { PiBrainBold } from "react-icons/pi";
import { FaChartLine, FaSearch, FaCodeBranch } from "react-icons/fa";

const pillars = [
  { icon: <FaSearch className="text-5xl text-blue-400" />, title: "Problem-First Thinking", desc: "I start with the business or user problem, then choose the model." },
  { icon: <FaChartLine className="text-5xl text-cyan-400" />, title: "Data-Driven Decisions", desc: "I trust experiments, baselines, and measurable metrics over assumptions." },
  { icon: <PiBrainBold className="text-5xl text-yellow-300" />, title: "Research Mindset", desc: "I document hypotheses, test variants, and learn from model failures." },
  { icon: <FaCodeBranch className="text-5xl text-purple-300" />, title: "Iteration Culture", desc: "Every project is a cycle of EDA, feature engineering, and model improvement." },
];

const Pillars = () => (
  <section className="w-full py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-6 px-4">
      Machine Learning Journey
    </motion.h2>
    <p className="text-center text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-12 px-4">
      Started learning Python, explored data analysis with Pandas, built Titanic survival prediction, and now exploring predictive machine learning systems.
    </p>
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {pillars.map((pillar, index) => (
        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }} className="p-6 rounded-xl border border-blue-500/20 bg-white/5 text-center">
          <div className="flex flex-col items-center gap-3">
            {pillar.icon}
            <h3 className="text-lg font-semibold">{pillar.title}</h3>
            <p className="text-sm text-gray-300">{pillar.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Pillars;
