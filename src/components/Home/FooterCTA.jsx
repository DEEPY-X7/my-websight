import React from "react";

export default function FooterCTA() {
  return (
    <footer className="border-t border-sky-300/10 py-8 mt-8">
      <div className="section-wrap flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Deepanshu Yadav • Machine Learning Portfolio</p>
        <p>Built with React, Vite, Tailwind</p>
      </div>
    </footer>
  );
}
