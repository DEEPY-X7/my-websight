import React, { useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import blogs from "./blog-data";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const index = blogs.findIndex((b) => b.slug === slug);
  const blog = blogs[index];

  if (!blog) {
    return (
      <div className="text-white min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="text-center">
          <p className="text-lg mb-4">❌ Blog not found.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
          >
            🔙 Go to Home
          </button>
        </div>
      </div>
    );
  }

  const prevBlog = blogs[index - 1];
  const nextBlog = blogs[index + 1];

  const isStringContent = typeof blog.content === "string";
  const wordCount = isStringContent ? blog.content.split(/\s+/).length : 300;
  const readTime = Math.ceil(wordCount / 200);

  const blogURL = window.location.origin + location.pathname;
  const encodedTitle = encodeURIComponent(blog.title);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0d0d0d] text-white min-h-screen"
    >
      {/* Back Header */}
      <div className="sticky top-0 z-50 bg-[#121212] border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <span className="text-xl">←</span> Go Back
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          onError={(e) => {
            e.target.src = "/fallback-image.jpg";
          }}
          className="rounded-xl mb-8 w-full object-cover max-h-[400px]"
        />

        {/* Title and Meta */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-400 mb-4">
          📅 {blog.date} — {blog.tags.join(", ")} — {readTime} min read
        </p>

        {/* Blog Content */}
        <article className="prose prose-invert max-w-none mb-16 text-sm sm:text-base md:text-lg leading-relaxed">
          {blog.content}
        </article>

        {/* Social Sharing */}
        <div className="mb-12 flex flex-wrap gap-4 items-center text-sm">
          <span className="text-gray-500">Share:</span>
          <a
            href={`https://wa.me/?text=${encodedTitle} - ${blogURL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-green-400"
          >
            WhatsApp
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${blogURL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-400"
          >
            X (Twitter)
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${blogURL}&title=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-300"
          >
            LinkedIn
          </a>
        </div>

        {/* Prev/Next Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center text-sm gap-6 sm:gap-4">
          {prevBlog ? (
            <Link
              to={`/blog/${prevBlog.slug}`}
              className="flex items-start gap-2 text-gray-400 hover:text-white transition-all hover:-translate-y-1"
            >
              <span className="text-2xl">←</span>
              <div>
                <p className="font-medium">Previous</p>
                <p className="text-xs">{prevBlog.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextBlog ? (
            <Link
              to={`/blog/${nextBlog.slug}`}
              className="flex items-end sm:items-center gap-2 text-gray-400 hover:text-white transition-all hover:-translate-y-1 sm:ml-auto text-right"
            >
              <div>
                <p className="font-medium">Next</p>
                <p className="text-xs">{nextBlog.title}</p>
              </div>
              <span className="text-2xl">→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </motion.section>
  );
}
