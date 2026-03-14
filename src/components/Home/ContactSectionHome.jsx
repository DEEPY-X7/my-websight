import React from "react";

export default function ContactSectionHome() {
  return (
    <section id="contact" className="section-wrap py-24">
      <div className="surface-card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="text-slate-400 mt-2">Open to Machine Learning Internship Opportunities.</p>
        </div>
        <div className="text-sm text-slate-300 space-y-1">
          <p>
            Email: <a className="hover:text-sky-300" href="mailto:deepy.x7@gmail.com">deepy.x7@gmail.com</a>
          </p>
          <p>
            LinkedIn: <a className="hover:text-sky-300" href="https://www.linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/deepanshu-yadav</a>
          </p>
          <p>
            GitHub: <a className="hover:text-sky-300" href="https://github.com/DEEPY-X7" target="_blank" rel="noreferrer">github.com/DEEPY-X7</a>
          </p>
        </div>
      </div>
    </section>
  );
}
