import React from "react";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12 text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold tracking-wide text-white">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
