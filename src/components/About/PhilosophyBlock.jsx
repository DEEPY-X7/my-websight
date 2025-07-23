import React from "react";
import { motion } from "framer-motion";

const philosophyPoints = [
  "I don’t code to impress — I code to express the part of me that cannot speak.",
  "True clarity doesn’t come from books — it comes when your mind is still enough to hear its own logic.",
  "Solitude isn’t loneliness — it’s where you meet the uncensored version of yourself.",
  "Most people chase success; I study cause — because if I master the root, the fruits take care of themselves.",
  "Everything I build is a mirror. Not of what I have — but of what I’m becoming."
];

export default function PhilosophyBlock() {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* ✅ Deep & Grounded Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
        >
          🧠 My Personal Code of Thought
        </motion.h2>

        {/* ✅ Floating Philosophical Statements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {philosophyPoints.map((line, index) => (
            <motion.div
              key={index}
              className="text-center text-gray-300 text-base sm:text-lg leading-relaxed max-w-md px-2"
              animate={{
                y: [0, -6, 0, 6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              “{line}”
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
