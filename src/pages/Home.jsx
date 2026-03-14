import React from "react";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import StackIcons from "../components/Home/StackIcons";
import Pillars from "../components/Home/Pillars";
import BlogHighlight from "../components/Home/BlogHighlight";
import ProjectTeaser from "../components/Home/ProjectTeaser";
import GitHubShowcase from "../components/Home/GitHubShowcase";
import Footer from "../components/Home/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StackIcons />
      <Pillars />
      <ProjectTeaser />
      <GitHubShowcase />
      <BlogHighlight />
      <Footer />
    </>
  );
}
