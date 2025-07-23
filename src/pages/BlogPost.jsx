// src/pages/BlogPost.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "./components/Blog/Blog";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <div className="text-center">
          <h1 className="text-3xl font-bold">404 – Blog Not Found</h1>
          <p className="text-gray-400 mt-2">The blog you’re looking for doesn’t exist.</p>
          <Link to="/blog" className="mt-4 inline-block text-blue-400 underline">
            ← Go back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="text-sm text-gray-400 hover:underline">← Back to Blog</Link>

        <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>
        <p className="text-sm text-gray-400 mt-1">{blog.date}</p>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-2xl mt-6 mb-6 shadow-lg"
        />

        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="space-y-6 leading-relaxed text-gray-200">
          {blog.content.map((para, idx) => (
            <p key={idx} className="text-lg">{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
