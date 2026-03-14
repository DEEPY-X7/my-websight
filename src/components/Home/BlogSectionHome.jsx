import React from "react";

const posts = [
  "Understanding Logistic Regression",
  "Exploring the Titanic Dataset",
  "What I Learned From My First ML Project",
];

function BlogCard({ title }) {
  return (
    <article className="surface-card p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-400 mt-2">Learning-first notes from hands-on experiments and mistakes.</p>
      <a href="/blog" className="text-sm text-sky-300 mt-3 inline-block">Read Blog →</a>
    </article>
  );
}

export default function BlogSectionHome() {
  return (
    <section className="section-wrap py-16">
      <h2 className="text-3xl font-semibold">Blog</h2>
      <p className="text-slate-400 mt-2">I document concepts in simple language as I learn.</p>
      <div className="mt-7 grid md:grid-cols-3 gap-4">
        {posts.map((post) => <BlogCard key={post} title={post} />)}
      </div>
    </section>
  );
}
