import SectionHeader from '@/components/ui/SectionHeader';

export const metadata = {
  title: 'Notes',
  description: 'Download machine learning notes covering Python, math, ML concepts, and AI fundamentals.',
};

export default function NotesPage() {
  return (
    <section className="section-wrap py-16">
      <SectionHeader title="Notes" description="Download structured study notes for your full AI/ML learning journey." />
      <article className="surface-card p-6 max-w-3xl">
        <h3 className="text-xl font-semibold">Machine Learning Complete Notes (PDF)</h3>
        <ul className="list-disc pl-6 text-slate-300 mt-3 space-y-1 text-sm">
          <li>Python for ML</li>
          <li>Mathematics for ML</li>
          <li>Machine Learning concepts</li>
          <li>AI fundamentals</li>
        </ul>
        <a href="/notes/machine-learning-complete-notes.pdf" className="inline-block mt-5 px-4 py-2 rounded-lg bg-sky-400 text-slate-950 font-semibold hover:bg-sky-300">Download PDF</a>
      </article>
    </section>
  );
}
