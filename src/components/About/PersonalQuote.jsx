import React from "react";
import { motion } from "framer-motion";

const personalQuote = `
I’m not building for applause.
I’m building for impact.

While the world scrolls, I sculpt.
While they chase trends, I design legacies.

In silence, I craft — not for now, but for eternity.
`;

export default function PersonalQuote() {
  return (
    <section className="pt-20 pb-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* ✅ Animated Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
        >
          🧠 Philosophy I Live By
        </motion.h2>

        {/* ✅ Floating Quote Block */}
        <motion.blockquote
          className="text-base sm:text-lg md:text-xl text-gray-300 text-center leading-relaxed tracking-wide italic"
          animate={{ y: [0, -6, 0, 6, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          “{personalQuote.trim().split("\n").map((line, i) => (
            <span key={i} className="block">
              {line.trim()}
            </span>
          ))}”
        </motion.blockquote>
      </div>
    </section>
  );
}
