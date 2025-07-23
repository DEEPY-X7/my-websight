import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaCode, FaFeatherAlt } from "react-icons/fa";
import { PiBrainBold } from "react-icons/pi";

const pillars = [
  {
    icon: <FaCode className="text-5xl text-blue-400" />,
    title: "Clean & Conscious Code",
    desc: "I write with clarity, not just for machines but for minds.",
  },
  {
    icon: <FaHeart className="text-5xl text-pink-400" />,
    title: "Emotion + Logic",
    desc: "I craft software from the soul, balanced with structure.",
  },
  {
    icon: <PiBrainBold className="text-5xl text-yellow-300" />,
    title: "First Principles Thinking",
    desc: "Breaking down to fundamentals to invent, not imitate.",
  },
  {
    icon: <FaFeatherAlt className="text-5xl text-purple-300" />,
    title: "Elegance & Minimalism",
    desc: "Gives a classic, eternal feel. 'Silence' adds emotional depth.",
  },
];

const Pillars = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* ⛰️ Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-6 px-4"
      >
        My Core Pillars
      </motion.h2>

      <p className="text-center text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-12 px-4">
        The principles that guide every line I write.
      </p>

      {/* 🧱 Pillar Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="w-full h-full p-6 sm:p-8 rounded-xl border border-gray-700 backdrop-blur-sm bg-white/5 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center gap-4"
          >
            <motion.div
              animate={{ y: [0, -6, 0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              className="flex flex-col items-center gap-2"
            >
              {pillar.icon}
              <h3 className="text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-300">{pillar.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
