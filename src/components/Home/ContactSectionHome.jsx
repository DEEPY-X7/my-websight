import React from "react";

export default function ContactSectionHome() {
  return (
    <section id="contact" className="section-wrap py-24">
      <div className="surface-card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="text-slate-400 mt-2">Open to ML internship opportunities, collaborative projects, and feedback.</p>
        </div>
        <div className="text-sm text-slate-300 space-y-1">
          <p>Email: deepy.x7@gmail.com</p>
          <p>GitHub: github.com/DEEPY-X7</p>
        </div>
      </div>
    </section>
  );
}
