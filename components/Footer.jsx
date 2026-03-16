import Link from 'next/link';

const quickLinks = [
  ['Start Here', '/start-here'],
  ['Roadmap', '/roadmap'],
  ['Lessons', '/lessons'],
  ['Projects', '/projects'],
  ['Notes', '/notes'],
  ['About', '/about'],
];

export default function Footer() {
  return (
    <footer className="border-t border-sky-300/10 mt-16">
      <div className="section-wrap py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">AI Learning Platform</p>
          <p className="text-sm text-slate-400 mt-1">
            Python → Mathematics → Machine Learning → Deep Learning → AI Systems
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {quickLinks.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-sky-300 transition">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
