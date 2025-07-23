import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Dummy Data (later to be fetched from blog-data.js)
const popularPosts = [
  {
    title: "Why I Design at 2AM When It Rains",
    image:
      "https://res.cloudinary.com/dadp7h2k1/image/upload/v1753145686/pexels-lukas-rychvalsky-670720-1-scaled_fa59a1.jpg",
    slug: "design-at-2am",
  },
  {
    title: "Freelance Tips I Wish I Knew in Year 1",
    image:
      "https://res.cloudinary.com/dadp7h2k1/image/upload/v1753145465/pexels-photo-10003549_uhyzfz.jpg",
    slug: "freelance-tips",
  },
  {
    title: "MERN Stack & Mindfulness",
    image:
      "https://res.cloudinary.com/dadp7h2k1/image/upload/v1753145231/pexels-rahul-pandit-1933900_wdullw.jpg",
    slug: "mern-mindfulness",
  },
];

const tags = ["mern", "mindfulness", "freelance", "design", "rain", "focus"];

export default function BlogSidebar() {
  return (
    <aside className="space-y-8 lg:sticky lg:top-24 w-full">
      {/* 📈 Popular Posts */}
      <motion.div
        className="bg-[#1a1a1a] rounded-xl shadow p-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold mb-4 text-white">
          📈 Popular Posts
        </h4>
        <div className="space-y-4">
          {popularPosts.map((post, idx) => (
            <Link to={`/blog/${post.slug}`} key={idx}>
              <motion.div
                className="flex items-center gap-3 hover:text-gray-300 cursor-pointer transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-12 h-12 rounded object-cover shrink-0"
                />
                <p className="text-sm text-gray-300 leading-snug">
                  {post.title}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* 🏷️ Tags Cloud */}
      <motion.div
        className="bg-[#1a1a1a] rounded-xl shadow p-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold mb-4 text-white">🏷️ Tags</h4>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <Link to={`/tags/${tag}`} key={idx}>
              <motion.span
                className="px-3 py-1 text-xs rounded-full bg-gray-700/40 text-gray-300 hover:bg-gray-600/50 transition-all cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                #{tag}
              </motion.span>
            </Link>
          ))}
        </div>
      </motion.div>
    </aside>
  );
}
