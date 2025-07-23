import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import ServiceCard from "./ServiceCard";
import ServicesCTA from "./ServicesCTA";

const services = [
  {
    icon: "UserCircle",
    title: "Personal Brand Websites",
    description: "For influencers and thinkers who want to stand out",
    color: "#0ea5e9", // Sky Blue
  },
  {
    icon: "Briefcase",
    title: "Business Landing Pages",
    description: "High-conversion, mobile-first sites for businesses",
    color: "#f59e0b", // Amber
  },
  {
    icon: "BookOpen",
    title: "Blog + CMS Setup",
    description: "For creators and writers (custom or Ghost/Notion-based)",
    color: "#10b981", // Emerald
  },
  {
    icon: "Brain",
    title: "AI + Smart Dashboards",
    description: "AI-integrated tools and dashboards for smart decisions",
    color: "#a855f7", // Violet
  },
  {
    icon: "Code",
    title: "Portfolio for Developers",
    description: "Resume + Portfolio + Projects — Your brand as a coder",
    color: "#3b82f6", // Blue
  },
  {
    icon: "Layout",
    title: "UI/UX Audit & Revamp",
    description: "Full redesigns to increase clarity, impact, and results",
    color: "#ef4444", // Red
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* ✅ Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          What I Can Build For You
        </motion.h2>

        {/* ✅ Animated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {services.map((service, index) => {
            const IconComponent = LucideIcons[service.icon];
            return (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0, 10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <ServiceCard
                  icon={IconComponent}
                  iconColor={service.color}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ✅ CTA */}
        <div className="mt-20">
          <ServicesCTA />
        </div>
      </div>
    </section>
  );
}
