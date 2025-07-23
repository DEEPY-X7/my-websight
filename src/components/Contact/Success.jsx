import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-4">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <CheckCircle className="text-green-500 text-6xl animate-bounce" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            ✅ Message Sent Successfully!
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-300 mb-8 text-sm md:text-base"
          >
            Thank you for reaching out. I’ll get in touch with you shortly via your provided contact.
          </motion.p>

          {/* Go Home Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white text-black hover:bg-gray-100 rounded-full transition duration-300"
            >
              🏠 Go Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
