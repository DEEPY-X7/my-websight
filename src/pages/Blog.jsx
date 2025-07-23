// src/pages/Blog.jsx
import React from "react";
import Navbar from "../components/Home/Navbar";
import FooterCTA from "../components/Home/FooterCTA";
import BlogSection from "../components/Blog/BlogSection";

import ErrorBoundary from "../error/ErrorBoundary"; // ✅ Import ErrorBoundary

export default function Blog() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <ErrorBoundary>
        <BlogSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <FooterCTA />
      </ErrorBoundary>
    </>
  );
}
