import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogCard({ title, snippet, image, tags, slug }) {
  return (
    <Link to={`/blog/${slug}`} className="w-full">
      <motion.div
        className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group h-full"
        whileHover={{ scale: 1.015 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        {/* Blog Thumbnail */}
        <div className="overflow-hidden w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-52 md:h-56 lg:h-48 xl:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Blog Content */}
        <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-gray-300 transition-colors duration-200">
            {title}
          </h3>

          <p className="text-sm sm:text-base text-gray-400 mb-4 line-clamp-3">
            {snippet}
          </p>

          {/* Tags */}
          <div className="mt-auto flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-700/40 text-gray-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
