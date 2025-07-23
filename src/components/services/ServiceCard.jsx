import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  iconColor,
  title,
  description,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col items-start justify-between group w-full hover:border-white transition duration-300"
    >
      {/* ✅ Icon */}
      <div className="mb-4 text-white">
        <Icon
          size={40}
          color={iconColor}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* ✅ Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
        {title}
      </h3>

      {/* ✅ Description */}
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed flex-1">
        {description}
      </p>

      {/* ✅ Learn More CTA */}
      <button className="mt-4 text-sm sm:text-base text-gray-300 group-hover:text-white flex items-center gap-1 hover:underline transition duration-200">
        Learn More <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}
