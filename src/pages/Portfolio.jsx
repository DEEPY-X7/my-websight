// src/pages/Portfolio.jsx

import React, { Suspense } from "react";
import Navbar from "../components/Home/Navbar";
import FooterCTA from "../components/Home/FooterCTA";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import ErrorBoundary from "../error/ErrorBoundary";

function Portfolio() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <main className="min-h-screen bg-black text-white">
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center py-20">Loading portfolio...</div>}>
            <PortfolioSection />
          </Suspense>
        </ErrorBoundary>
      </main>

      <ErrorBoundary>
        <FooterCTA />
      </ErrorBoundary>
    </>
  );
}

export default Portfolio;
