import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-red-900 to-black text-white px-4">
      <div className="text-center max-w-3xl w-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <FaExclamationTriangle className="text-yellow-400 text-7xl animate-pulse" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Oops! This page doesn't exist 😅
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-md text-gray-300 mb-6 px-2"
        >
          The URL you entered might be incorrect or the page has been moved. Let’s head back home.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition duration-300"
          >
            🏠 Go to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;
