import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import blogs from "./blog-data";

export default function SlugNavigator() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const index = blogs.findIndex((b) => b.slug === slug);
  if (index === -1) return null; // 🛡️ Invalid slug protection

  const prevBlog = index > 0 ? blogs[index - 1] : null;
  const nextBlog = index < blogs.length - 1 ? blogs[index + 1] : null;

  return (
    <div className="mt-16 space-y-6">

      {/* 🔙 Go Back Button */}
      <div className="border-t border-gray-800 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-400 hover:text-white transition-all flex items-center gap-2"
        >
          <span className="text-lg">←</span> Go Back
        </button>
      </div>

      {/* ↔️ Previous & Next Nav */}
      <div className="flex justify-between items-center text-sm gap-4">
        {prevBlog && (
          <Link
            to={`/blog/${prevBlog.slug}`}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-all"
          >
            <span className="text-2xl">←</span>
            <div>
              <p className="font-medium">Previous</p>
              <p className="text-xs">{prevBlog.title}</p>
            </div>
          </Link>
        )}

        {nextBlog && (
          <Link
            to={`/blog/${nextBlog.slug}`}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-all ml-auto text-right"
          >
            <div>
              <p className="font-medium">Next</p>
              <p className="text-xs">{nextBlog.title}</p>
            </div>
            <span className="text-2xl">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
