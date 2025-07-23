// src/pages/About.jsx
import React from 'react';
import Navbar from '../components/Home/Navbar'; // ✅ Reuse Navbar
import AboutIntro from "../components/About/AboutIntro";
import AboutTimeline from "../components/About/AboutTimeline";
import PhilosophyBlock from "../components/About/PhilosophyBlock";
import TechStackGrid from "../components/About/TechStackGrid";
import PersonalQuote from "../components/About/PersonalQuote";
import FooterCTA from '../components/Home/FooterCTA';

import ErrorBoundary from '../error/ErrorBoundary'; // ✅ Import ErrorBoundary

export default function About() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <main className="bg-black text-white pt-20 pb-16">
        <ErrorBoundary>
          <AboutIntro />
        </ErrorBoundary>

        <ErrorBoundary>
          <AboutTimeline />
        </ErrorBoundary>

        <ErrorBoundary>
          <PhilosophyBlock />
        </ErrorBoundary>

        <ErrorBoundary>
          <TechStackGrid />
        </ErrorBoundary>

        <ErrorBoundary>
          <PersonalQuote />
        </ErrorBoundary>

        <ErrorBoundary>
          <FooterCTA />
        </ErrorBoundary>
      </main>
    </>
  );
}
