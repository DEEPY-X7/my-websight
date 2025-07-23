import React from "react";
import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          🤝 Let’s Build Something Together
        </motion.h2>
      </div>
    </section>
  );
}
