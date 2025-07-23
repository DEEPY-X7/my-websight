import React from "react";
import { FaBug } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorFallback = ({ error }) => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-red-900 to-black text-white py-20 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* ✅ Animated Bug Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <FaBug className="text-red-500 text-7xl animate-pulse" />
        </motion.div>

        {/* ✅ Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Oops! Something went wrong 😓
        </motion.h2>

        {/* ✅ Error Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-md text-gray-300 mb-6"
        >
          {error?.message || "An unexpected error occurred. Let’s go back home and try again."}
        </motion.p>

        {/* ✅ CTA Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white text-black hover:bg-gray-100 rounded-full transition duration-300"
          >
            🏠 Go to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ErrorFallback;
