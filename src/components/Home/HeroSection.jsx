import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "MERN Stack Developer | Soulful Coder | Digital Dream Weaver";
  const speed = 60;

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText[i]);
      i++;
      if (i === fullText.length) clearInterval(typeInterval);
    }, speed);
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 px-4 sm:px-6 md:px-16 pt-20 md:pt-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* 👤 Profile Image */}
      <motion.div
        className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl"
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="https://res.cloudinary.com/dadp7h2k1/image/upload/v1753085575/deepanshu-profile_xd6jzv.jpg"
          alt="Portrait of Deepanshu Yadav"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
        />
      </motion.div>

      {/* ✍️ Text Section */}
      <motion.div
        className="max-w-2xl text-center md:text-left space-y-4 px-2 sm:px-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          Hello, I’m <br />
          <span className="text-gray-300">Deepanshu Yadav</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400">
          I build web experiences that feel personal.  
          I don’t just write code — I compose expressions in logic and pixels.
        </p>

        <p className="text-sm sm:text-base md:text-lg font-mono text-gray-500 min-h-[2rem]">
          {typedText}
          <span className="animate-blink">|</span>
        </p>

        <a
          href="/portfolio"
          className="inline-block mt-4 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
