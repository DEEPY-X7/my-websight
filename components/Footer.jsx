import Link from 'next/link';

const footerLinks = [
  ['Start Here', '/start-here'],
  ['Roadmap', '/roadmap'],
  ['Lessons', '/lessons'],
  ['Projects', '/projects'],
  ['Notes', '/notes'],
  ['About', '/about'],
];

export default function Footer() {
  return (
    <footer className="border-t border-sky-300/10 mt-20">
      <div className="section-wrap py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <p className="font-semibold">AI Learning Platform</p>
          <p className="text-sm text-slate-400 mt-1">
            Learn AI from first principles: Python → Math → ML → Deep Learning → AI Systems.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
          {footerLinks.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="hover:text-sky-300 transition">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
