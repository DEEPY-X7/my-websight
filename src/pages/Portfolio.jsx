import React, { Suspense } from "react";
import Navbar from "../components/Home/Navbar";
import FooterCTA from "../components/Home/FooterCTA";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import ErrorBoundary from "../error/ErrorBoundary";

export default function Portfolio() {
  return (
    <div className="bg-[#0F172A] text-slate-100 min-h-screen">
      <ErrorBoundary><Navbar /></ErrorBoundary>
      <main>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-center py-20">Loading ML projects...</div>}>
            <PortfolioSection />
          </Suspense>
        </ErrorBoundary>
      </main>
      <ErrorBoundary><FooterCTA /></ErrorBoundary>
    </div>
  );
}
