import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-wrap py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-slate-400 mt-3">The page you are looking for does not exist.</p>
      <Link href="/" className="inline-block mt-5 text-sky-300">Go back home →</Link>
    </section>
  );
}
