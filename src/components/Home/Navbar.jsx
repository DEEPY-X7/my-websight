import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Research", path: "/research" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/70 border-b border-blue-400/20"
    >
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-bold tracking-wider text-white">
          Deepanshu<span className="text-blue-400">.AI</span>
        </div>

        <div className="hidden md:flex gap-8 text-base text-gray-300 font-semibold">
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `hover:text-white transition ${isActive ? "text-blue-300" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden text-white text-2xl">
          {menuOpen ? <HiX onClick={() => setMenuOpen(false)} /> : <HiMenuAlt3 onClick={() => setMenuOpen(true)} />}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-black/95 border-t border-blue-400/20">
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded ${isActive ? "text-blue-300" : "text-gray-300"}`
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
