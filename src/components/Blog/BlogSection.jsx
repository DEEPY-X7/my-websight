import React from "react";
import BlogCard from "./BlogCard";
import BlogSidebar from "./BlogSidebar";
import blogs from "./blog-data.js"; // ✅ Corrected import
import { motion } from "framer-motion";

export default function BlogSection() {
  return (
    <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14"
        >
          📝 Latest Writings
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">

          {/* Left: Blog Feed */}
          <div className="space-y-10">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                className="w-full"
                animate={{ y: [0, -5, 0, 5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.2,
                }}
              >
                <BlogCard {...blog} />
              </motion.div>
            ))}
          </div>

          {/* Right: Sidebar */}
          <aside className="space-y-8 sticky top-28 h-fit">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </section>
  );
}
