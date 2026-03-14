import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 px-4 sm:px-6 md:px-16 pt-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.div
        className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl"
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="https://res.cloudinary.com/dadp7h2k1/image/upload/v1753085575/deepanshu-profile_xd6jzv.jpg"
          alt="Portrait of Deepanshu Yadav"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="max-w-2xl text-center md:text-left space-y-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-blue-300 font-semibold">Machine Learning Engineer · AI Systems Builder</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Building Machine Learning Systems
        </h1>
        <p className="text-lg text-gray-300">
          Hi, I’m Deepanshu. I build machine learning systems and explore how data can create intelligent software.
          Currently building ML projects such as Titanic Survival Prediction and Iris Classification.
        </p>
        <p className="text-sm text-gray-400">
          BCA student exploring AI, Data Science, and practical machine learning workflows.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="https://github.com/DEEPY-X7" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-500/20">
            GitHub
          </a>
          <a href="/projects" className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600">
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
