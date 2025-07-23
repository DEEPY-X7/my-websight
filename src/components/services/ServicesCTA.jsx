import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServicesCTA() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 text-white"
      animate={{ y: [0, -6, 0, 6, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* ✅ Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8"
        >
          Not sure what you need? Let’s talk and find the right solution together.
        </motion.h2>

        {/* ✅ Call-to-Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/contact")}
          className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100 transition"
        >
          Let’s Discuss It <ArrowRight size={18} />
        </motion.button>
      </div>
    </motion.section>
  );
}
