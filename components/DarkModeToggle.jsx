'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : systemDark;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    setIsDark(dark);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-lg border border-slate-600 flex items-center justify-center hover:border-sky-400 transition"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
