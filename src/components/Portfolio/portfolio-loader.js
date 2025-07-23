// src/components/Portfolio/portfolio-loader.js

// 1️⃣ Import all meta.js files
const metaFiles = import.meta.glob("./portfolio-content/**/meta.js", { eager: true });

// 2️⃣ Import all content.js files (optional for detail page)
const contentFiles = import.meta.glob("./portfolio-content/**/content.js", { eager: true });

// 3️⃣ Generate unified project objects with slug, meta, content
const projects = Object.entries(metaFiles).map(([metaPath, metaModule]) => {
  const parts = metaPath.split("/");
  const slug = parts[parts.length - 2]; // folder name becomes slug

  const contentPath = `./portfolio-content/${slug}/content.js`;
  const contentModule = contentFiles[contentPath];

  return {
    slug,
    ...metaModule.default,        // ✅ meta.js content
    content: contentModule?.default || "", // ✅ content.js content (can be string or JSX or component)
  };
});

// 4️⃣ Sort by date (latest first)
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

export default projects;
