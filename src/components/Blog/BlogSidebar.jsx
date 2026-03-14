import React from "react";
import { Link } from "react-router-dom";
import blogs from "./blog-data";

const tags = ["machine-learning", "classification", "eda", "python", "pandas", "data-cleaning"];

export default function BlogSidebar() {
  const popularPosts = blogs.slice(0, 3);

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 w-full">
      <div className="bg-[#1a1a1a] rounded-xl shadow p-5">
        <h4 className="text-lg font-semibold mb-4 text-white">Popular AI/ML Posts</h4>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="flex items-center gap-3">
              <img src={post.image} alt={post.title} className="w-12 h-12 rounded object-cover" />
              <p className="text-sm text-gray-300">{post.title}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-xl shadow p-5">
        <h4 className="text-lg font-semibold mb-4 text-white">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-gray-700/40 text-gray-300">#{tag}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}
