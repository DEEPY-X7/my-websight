'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const navItems = [
  ['Start Here', '/start-here'],
  ['Roadmap', '/roadmap'],
  ['Lessons', '/lessons'],
  ['Projects', '/projects'],
  ['Notes', '/notes'],
  ['About', '/about'],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-300/10 bg-slate-900/85 backdrop-blur">
      <nav className="section-wrap py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">AI<span className="text-sky-400">.Lab</span></Link>
        <div className="hidden md:flex items-center gap-5">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`text-sm ${pathname === href ? 'text-sky-300' : 'text-slate-300 hover:text-slate-100'}`}
            >
              {label}
            </Link>
          ))}
          <DarkModeToggle />
        </div>
        <button className="md:hidden" onClick={() => setOpen((p) => !p)} aria-label="toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="section-wrap pb-4 md:hidden flex flex-col gap-2">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm ${pathname === href ? 'text-sky-300' : 'text-slate-300'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
