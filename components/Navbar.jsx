import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { navLinks } from './site-data';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-700/40 bg-bg/90 backdrop-blur">
      <div className="section-wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-heading text-lg font-semibold">AI Learning Platform</Link>
        <nav className="hidden gap-5 text-sm md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-muted transition hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  );
}
