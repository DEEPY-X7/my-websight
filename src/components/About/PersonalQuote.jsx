import React from "react";

export default function PersonalQuote() {
  return (
    <section className="pt-20 pb-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">Current Focus</h2>
        <blockquote className="text-base sm:text-lg text-gray-300 text-center leading-relaxed italic">
          “I am building a strong foundation in machine learning by shipping small, consistent projects.
          My goal is to become an ML engineer who can turn raw data into intelligent products.”
        </blockquote>
      </div>
    </section>
  );
}
