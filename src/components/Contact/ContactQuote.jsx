import React from "react";
import { motion } from "framer-motion";

export default function ContactQuote() {
  return (
    <section className="pt-16 pb-8 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 italic text-sm md:text-base"
        >
          “I believe in building digital experiences that feel personal, thoughtful, and eternal.”
        </motion.div>
      </div>
    </section>
  );
}
