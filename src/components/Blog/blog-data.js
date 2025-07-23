// src/components/Blog/blog-data.js

/**
 * 📦 Load all blog meta files (not raw content files)
 * Convention: each blog must have a corresponding *-meta.js file
 * Example: design-at-2am-meta.js
 */

const blogContext = import.meta.glob('./blog-content/*-meta.js', {
  eager: true,
});

// 🧠 Convert all default exports (blog objects) into an array
const blogs = Object.values(blogContext).map((mod) => mod.default);

export default blogs;
