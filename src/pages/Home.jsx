import React from "react";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import ProjectOverviewSection from "../components/Home/ProjectOverviewSection";
import SkillsSection from "../components/Home/SkillsSection";
import LearningJourneySection from "../components/Home/LearningJourneySection";
import GithubSection from "../components/Home/GithubSection";
import BlogSectionHome from "../components/Home/BlogSectionHome";
import AboutSectionHome from "../components/Home/AboutSectionHome";
import ContactSectionHome from "../components/Home/ContactSectionHome";
import FooterCTA from "../components/Home/FooterCTA";

export default function Home() {
  return (
    <div className="bg-[#0F172A] text-slate-200 min-h-screen">
      {/* Major redesign: homepage now follows an ML-portfolio-first information architecture. */}
      <Navbar />
      <HeroSection />
      <ProjectOverviewSection />
      <SkillsSection />
      <LearningJourneySection />
      <GithubSection />
      <BlogSectionHome />
      <AboutSectionHome />
      <ContactSectionHome />
      <FooterCTA />
    </div>
  );
}
