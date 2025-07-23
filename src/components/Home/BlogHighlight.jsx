import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogs from "../Blog/blog-data";

export default function BlogHighlight() {
  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4); // Show latest 4 blogs

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* 📝 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10"
        >
          📝 Latest Writings
        </motion.h2>

        <p className="text-center text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-10 sm:mb-12 px-4">
          Essays where logic meets emotion, and code becomes a mirror of the soul.
        </p>

        {/* 📚 Blog Grid */}
        <div
          className={`grid gap-8 place-items-center
            ${
              latestBlogs.length === 1
                ? "grid-cols-1"
                : latestBlogs.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : latestBlogs.length === 3
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
            }
          `}
        >
          {latestBlogs.length === 0 ? (
            <p className="text-center text-gray-400 col-span-full">
              No blogs available right now.
            </p>
          ) : (
            latestBlogs.map((post, index) => (
              <motion.div
                key={post.slug}
                animate={{ y: [0, -6, 0, 6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="w-full h-full"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block h-full rounded-xl overflow-hidden border border-gray-700 backdrop-blur-sm bg-white/5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  {/* 📸 Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-44 sm:h-52 object-cover"
                    onError={(e) => (e.target.src = "/fallback-image.jpg")}
                  />

                  {/* 📄 Text Content */}
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-3">
                      {typeof post.content === "string"
                        ? post.content.slice(0, 120) + "..."
                        : "Read more..."}
                    </p>
                    <p className="text-[10px] sm:text-xs text-right text-gray-500">
                      {post.date}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>

        {/* 🔗 See All Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/blog"
            className="text-blue-400 text-sm sm:text-base hover:underline transition duration-300"
          >
            See All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
