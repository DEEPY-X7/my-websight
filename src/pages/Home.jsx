import React from "react";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import ProjectOverviewSection from "../components/Home/ProjectOverviewSection";
import MLInsights from "../sections/MLInsights";
import Skills from "../sections/Skills";
import LearningJourney from "../sections/LearningJourney";
import GitHubProjects from "../sections/GitHubProjects";
import BlogSectionHome from "../components/Home/BlogSectionHome";
import AboutSectionHome from "../components/Home/AboutSectionHome";
import ContactSectionHome from "../components/Home/ContactSectionHome";
import FooterCTA from "../components/Home/FooterCTA";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectOverviewSection />
      <MLInsights />
      <Skills />
      <LearningJourney />
      <GitHubProjects />
      <BlogSectionHome />
      <AboutSectionHome />
      <ContactSectionHome />
      <FooterCTA />
    </div>
  );
}
