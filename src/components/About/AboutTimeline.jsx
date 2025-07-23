import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { timelineData } from "./aboutData";

export default function AboutTimeline() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 text-white">
      {/* ✅ Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 px-4"
      >
        My Journey Through Time
      </motion.h2>

      {/* ✅ Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-4">
        {timelineData.map((item, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            once: true,
            margin: "-50px 0px",
          });
          const controls = useAnimation();

          if (isInView) controls.start("visible");

          const isLeft = index % 2 === 0;

          // ✨ Randomized blinking animation
          const flickerDuration = Math.random() * 1 + 1;
          const flickerDelay = Math.random() * 2;

          return (
            <motion.div
              key={index}
              ref={ref}
              className={`relative w-full my-12 flex flex-col ${
                isLeft
                  ? "items-start pr-[5%] sm:pr-[55%]"
                  : "items-end pl-[5%] sm:pl-[55%]"
              }`}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              {/* ✅ Bulb + Date + Card all inside one container with border */}
              <div className="bg-white/5 border border-red-900/40 backdrop-blur-md p-5 rounded-xl w-full sm:w-[90%]">
                <div
                  className={`flex items-center gap-3 mb-3 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* 🔴 Bulb with glowing, pulsing, and blinking effect */}
                  <motion.div
                    className="relative"
                    initial={{ scale: 1 }}
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 10px rgba(220, 38, 38, 0.6), 0 0 20px rgba(220, 38, 38, 0.2)",
                        "0 0 20px rgba(220, 38, 38, 0.9), 0 0 35px rgba(220, 38, 38, 0.4)",
                        "0 0 10px rgba(220, 38, 38, 0.6), 0 0 20px rgba(220, 38, 38, 0.2)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: flickerDuration,
                      delay: flickerDelay,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-700 shadow-lg" />
                    {/* 🔆 Glowing Aura */}
                    <div className="absolute -inset-2 rounded-full bg-red-900 opacity-20 blur-2xl animate-pulse" />
                  </motion.div>

                  {/* 📅 Date */}
                  <p className="text-xs sm:text-sm text-gray-400">{item.date}</p>
                </div>

                {/* 📝 Content */}
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
