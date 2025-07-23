// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Home/Navbar';
import HeroSection from '../components/Home/HeroSection';
import StackIcons from '../components/Home/StackIcons';
import Pillars from '../components/Home/Pillars';
import BlogHighlight from '../components/Home/BlogHighlight';
import ProjectTeaser from '../components/Home/ProjectTeaser';
import Footer from '../components/Home/FooterCTA';

import ErrorBoundary from '../error/ErrorBoundary'; // ✅ Import ErrorBoundary

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <StackIcons />
      </ErrorBoundary>

      <ErrorBoundary>
        <Pillars />
      </ErrorBoundary>

      <ErrorBoundary>
        <BlogHighlight />
      </ErrorBoundary>

      <ErrorBoundary>
        <ProjectTeaser />
      </ErrorBoundary>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  );
}
