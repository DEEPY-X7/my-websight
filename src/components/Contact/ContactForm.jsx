import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message,
    };

    try {
      await emailjs.send(
        "service_a8tr5bm", // ✅ Replace with your actual ID
        "template_g38cqer",
        templateParams,
        "EEXtJ3F_mzj0aiYRa"
      );
      navigate("/message-sent");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Message failed to send. Please try again later.");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        {/* ✅ Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          📬 Let's Work Together
        </motion.h2>

        {/* ✅ Form with animation */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSend}
        >
          <div>
            <label className="block mb-1 text-sm">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Contact Number</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91-9876543210"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Your Message</label>
            <textarea
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none"
            />
          </div>

          {/* ✅ Button with motion */}
          <motion.button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={18} /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
