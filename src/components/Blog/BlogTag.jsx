import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "./blog-data"; // ✅ Metadata list of all blogs
import BlogCard from "./BlogCard"; // ✅ For showing each blog beautifully

export default function TagPage() {
  const { tag } = useParams();

  // Filter blogs that include the tag
  const filteredBlogs = blogs.filter((blog) => blog.tags.includes(tag));

  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white px-4 py-10">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 break-words">
          🏷️ Posts tagged with <span className="text-yellow-400">#{tag}</span>
        </h1>

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                title={blog.title}
                snippet={blog.snippet}
                image={blog.image}
                tags={blog.tags}
                slug={blog.slug}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No blogs found for this tag.</p>
        )}

        <div className="mt-10">
          <Link
            to="/blog"
            className="text-sm text-gray-400 hover:text-white transition-all"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
