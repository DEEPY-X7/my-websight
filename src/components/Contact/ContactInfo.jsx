import React from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin,
  Instagram, Github, Linkedin
} from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="space-y-6 text-sm"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <Mail size={20} className="text-gray-300" />
            <span className="text-gray-300">deepy.x7@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <Phone size={20} className="text-gray-300" />
            <span className="text-gray-300">+91 8917001315 (WhatsApp)</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin size={20} className="text-gray-300" />
            <span className="text-gray-300">Jaunpur, UP, India</span>
          </div>

          <div className="flex items-center gap-4">
            <Instagram size={20} className="text-pink-500" />
            <a
              href="https://www.instagram.com/deepy.x7/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              @deepy.x7
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Github size={20} className="text-white" />
            <a
              href="https://github.com/DEEPY-X7"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              github.com/DEEPY-X7
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Linkedin size={20} className="text-blue-400" />
            <a
              href="https://www.linkedin.com/in/deepu-yadav-4b63a72b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              linkedin.com/in/deepu-yadav
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
