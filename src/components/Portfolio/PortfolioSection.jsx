// src/components/Portfolio/PortfolioSection.jsx

import React from "react";
import { motion } from "framer-motion";
import ProjectGrid from "./ProjectGrid";

export default function PortfolioSection() {
  return (
    <motion.section
      className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 text-white"
      animate={{ y: [0, -6, 0, 6, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ✅ Motion Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Portfolio
        </motion.h2>

        {/* ✅ Project Grid */}
        <ProjectGrid />
      </div>
    </motion.section>
  );
}
