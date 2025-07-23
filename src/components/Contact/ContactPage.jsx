// 📁 /components/Contact/ContactPage.jsx

import React from "react";
import { motion } from "framer-motion";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactQuote from "./ContactQuote";

const contactDetails = {
  email: "deepy.x7@gmail.com",
  phone: "+91 8917001315",
  location: "Jaunpur, UP, India",
  links: [
    { icon: "instagram", url: "https://www.instagram.com/deepy.x7/", label: "@deepy.x7" },
    { icon: "github", url: "https://github.com/DEEPY-X7", label: "github.com/DEEPY-X7" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/deepu-yadav-4b63a72b4/", label: "linkedin.com/in/deepu-yadav" },
  ],
};

export default function ContactPage() {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6"
      animate={{ y: [0, -6, 0, 6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="max-w-6xl mx-auto w-full px-2 sm:px-4">
        {/* ✅ Heading */}
        <ContactHeader />

        {/* ✅ Form and Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo
            email={contactDetails.email}
            phone={contactDetails.phone}
            location={contactDetails.location}
            links={contactDetails.links}
          />
        </div>

        {/* ✅ Footer Quote */}
        <ContactQuote />
      </div>
    </motion.section>
  );
}
