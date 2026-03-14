import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogs from "../Blog/blog-data";

export default function BlogHighlight() {
  const latestBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-6">
          AI/ML Notes
        </motion.h2>
        <p className="text-center text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-12">
          Short technical writeups on model intuition, data cleaning, and applied machine learning.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {latestBlogs.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block rounded-xl overflow-hidden border border-gray-700 bg-white/5 hover:-translate-y-1 transition">
              <img src={post.image} alt={post.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="text-base font-semibold">{post.title}</h3>
                <p className="text-xs text-gray-400 mt-2 line-clamp-3">{post.snippet}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
