import Link from 'next/link';

export const metadata = { title: 'Notes | AI Learning Platform' };

export default function NotesPage() {
  return (
    <section className="section-wrap py-12">
      <h1 className="font-heading text-4xl">Notes</h1>
      <p className="mt-3 text-muted">Download concise notes for Python, mathematics, ML concepts, and AI fundamentals.</p>
      <div className="mt-8 surface-card p-6">
        <h2 className="font-heading text-2xl">Machine Learning Complete Notes (PDF)</h2>
        <p className="mt-2 text-muted">Covers Python for ML, Mathematics for ML, Machine Learning concepts, and AI fundamentals.</p>
        <Link href="/notes/machine-learning-complete-notes.pdf" className="mt-4 inline-block rounded-lg bg-accent px-5 py-2 font-medium text-slate-900">Download Notes</Link>
      </div>
    </section>
  );
}
