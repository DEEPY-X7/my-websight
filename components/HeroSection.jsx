import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="section-wrap py-16 md:py-24">
      <p className="mb-3 text-sm uppercase tracking-widest text-accent2">Focus • Depth • System</p>
      <h1 className="font-heading text-4xl font-bold leading-tight md:text-6xl">
        Learn AI & Machine Learning From First Principles
      </h1>
      <p className="mt-5 max-w-3xl text-lg text-muted">
        Follow a structured path from Python foundations to real AI systems with intuitive lessons,
        visual explanations, and practical ML projects.
      </p>
      <p className="mt-6 text-accent">Python → Math → Machine Learning → Deep Learning → AI Systems</p>
      <Link href="/start-here" className="mt-8 inline-flex rounded-xl bg-accent px-6 py-3 font-medium text-slate-900">
        Start Learning
      </Link>
    </section>
  );
}
