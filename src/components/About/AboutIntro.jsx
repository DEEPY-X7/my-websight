import React from "react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-16 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          About Me
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          I am a BCA student exploring machine learning and artificial intelligence.
        </p>
        <p className="text-base sm:text-lg text-gray-400">
          My focus is understanding how intelligent systems work and building real-world ML projects using Python and data science tools.
        </p>
      </motion.div>

      <motion.img
        src="https://res.cloudinary.com/dadp7h2k1/image/upload/v1753110936/deepanshu_jeutmj.png"
        alt="Portrait of Deepanshu Yadav"
        className="w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-blue-500/30 object-cover"
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
}
