import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    icon: <FaGithub />,
    url: "https://github.com/DEEPY-X7",
    label: "GitHub",
    color: "text-gray-400 hover:text-white",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/deepu-yadav-4b63a72b4/",
    label: "LinkedIn",
    color: "text-blue-400 hover:text-blue-300",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:deepy.x7@gmail.com",
    label: "Email",
    color: "text-red-400 hover:text-red-300",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/918917001315",
    label: "WhatsApp",
    color: "text-green-400 hover:text-green-300",
  },
  {
    icon: <FaPhoneAlt />,
    url: "tel:+918917001315",
    label: "Call",
    color: "text-yellow-400 hover:text-yellow-300",
  },
];

const FooterCTA = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* CTA Section */}
        <div className="px-2 sm:px-0">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Let’s Build Something Timeless
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Want to collaborate or just say hi? I'm always open to meaningful
            conversations and impactful ideas.
          </p>
        </div>

        {/* Animated Social Links */}
        <div className="flex justify-center md:justify-start flex-wrap gap-4 min-h-[120px] items-start relative px-2 sm:px-0">
          {SOCIAL_LINKS.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              className={`text-xl p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md ${item.color} transition-all hover:scale-110`}
              initial={{ y: 0 }}
              animate={{ y: [0, 20, -20, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm flex flex-col justify-center items-center md:items-start px-2 sm:px-0">
          <p className="mb-2">Crafted with 💻 by Deepanshu Yadav</p>
          <p>© {new Date().getFullYear()} Deepanshu. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none z-0" />
    </footer>
  );
};

export default FooterCTA;
