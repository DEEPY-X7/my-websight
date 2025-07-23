import React from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaJsSquare, FaGitAlt, FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress
} from "react-icons/si";
import { motion } from "framer-motion";

// ✅ Tech stack data array
const techStack = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "Database", icon: <FaDatabase className="text-purple-400" /> },
];

export default function TechStackGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* ✅ Animated Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          💻 Tools I Master
        </motion.h2>

        {/* ✅ Animated Grid of Tools */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 px-2"
              animate={{ y: [0, -6, 0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <div className="text-4xl sm:text-5xl">{tech.icon}</div>
              <p className="text-xs sm:text-sm text-gray-300 text-center">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
