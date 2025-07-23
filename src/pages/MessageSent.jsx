import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Home/Navbar";
import FooterCTA from "../components/Home/FooterCTA";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MessageSent() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full text-center"
        >
          {/* ✅ Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <FaPaperPlane className="text-green-400 text-6xl animate-bounce" />
          </motion.div>

          {/* ✅ Heading (with system animation) */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            🎉 Message Sent Successfully!
          </motion.h2>

          {/* ✅ Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-md text-gray-300 mb-6"
          >
            Thank you for reaching out, <br className="md:hidden" />
            I’ll get back to you shortly via email or phone. 📞💌
          </motion.p>

          {/* ✅ CTA Button */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mt-6"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white text-black hover:bg-gray-100 rounded-full transition duration-300"
            >
              🏠 Go Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <FooterCTA />
    </>
  );
}
