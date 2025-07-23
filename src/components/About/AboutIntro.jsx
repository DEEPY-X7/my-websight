import React from "react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 px-4 sm:px-6 md:px-16 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
      {/* ✅ Left: Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center md:text-left space-y-6 order-2 md:order-1"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Hello, I’m <br />
          <span className="text-gray-300">WORL LEADER MR. DEEPU JI</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-400">
          I code alone when it rains — not as a habit, but as a ritual.  
          I walk the path no one dares to choose,  
          because that's where I find my true self.
        </p>
      </motion.div>

      {/* ✅ Right: Floating Profile Image */}
      <motion.div
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl order-1 md:order-2"
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="https://res.cloudinary.com/dadp7h2k1/image/upload/v1753110936/deepanshu_jeutmj.png"
          alt="Portrait of WORL LEADER MR. DEEPU JI"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
        />
      </motion.div>
    </section>
  );
}
