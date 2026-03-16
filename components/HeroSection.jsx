import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="section-wrap py-20 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-sky-400 text-sm">Structured AI Education Platform</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
          Learn AI &amp; Machine Learning From First Principles
        </h1>
        <p className="mt-5 text-slate-300 max-w-xl">
          Follow a focused journey from Python to AI systems with lessons, visual intuition, and project-based learning.
        </p>
        <div className="mt-7 flex gap-3 flex-wrap">
          <Link href="/start-here" className="px-5 py-3 rounded-xl bg-sky-400 text-slate-950 font-semibold hover:bg-sky-300 transition">
            Start Learning
          </Link>
          <Link href="/roadmap" className="px-5 py-3 rounded-xl border border-slate-600 hover:border-sky-400 transition">
            View Roadmap
          </Link>
        </div>
      </div>
      <div className="surface-card p-6">
        <h2 className="text-xl font-semibold">Learning Path</h2>
        <p className="text-slate-400 mt-2">Python → Math → Machine Learning → Deep Learning → AI Systems</p>
        <div className="mt-5 grid grid-cols-1 gap-3">
          {['Python', 'Math', 'Machine Learning', 'Deep Learning', 'AI Systems'].map((item, index) => (
            <div key={item} className="rounded-lg border border-sky-400/20 bg-slate-900/70 px-4 py-3 text-sm flex justify-between">
              <span>{item}</span>
              <span className="text-sky-300">Stage {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
