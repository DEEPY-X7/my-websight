import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experiments", path: "/research" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? "text-sky-300" : "text-slate-300 hover:text-slate-100"}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-sky-300/10 bg-[#0f172a]/90 backdrop-blur">
      <div className="section-wrap py-4 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold tracking-tight">
          Deepanshu<span className="text-sky-400">.ml</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://github.com/DEEPY-X7"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-sky-300 transition-colors"
            aria-label="Open GitHub profile"
          >
            <Github size={18} />
          </a>
        </div>

        <button
          className="md:hidden text-slate-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden section-wrap pb-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
