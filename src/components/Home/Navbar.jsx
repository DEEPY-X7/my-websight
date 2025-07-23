import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const navVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-gradient-to-b from-black/60 via-black/20 to-transparent border-b border-white/10 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* 🔹 Logo */}
        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold tracking-wider text-white"
        >
          Deepanshu<span className="text-blue-400">.Dev</span>
        </motion.div>

        {/* 🔸 Desktop Nav */}
        <div className="hidden md:flex gap-10 text-base md:text-lg text-gray-300 font-semibold">
          {NAV_ITEMS.map(({ label, path }) => (
            <motion.div key={label} variants={itemVariants}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative group hover:text-white transition duration-300 ${
                    isActive ? "text-white" : ""
                  }`
                }
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-blue-400 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* 🔸 Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl">
          {menuOpen ? (
            <HiX onClick={() => setMenuOpen(false)} />
          ) : (
            <HiMenuAlt3 onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* 🔸 Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-4 text-white bg-black/90 backdrop-blur-md border-t border-white/10">
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded hover:bg-white/10 transition ${
                  isActive ? "text-blue-400" : "text-gray-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
