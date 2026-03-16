import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { lessonData } from '@/lib/content';

export const metadata = {
  title: 'Lessons',
  description: 'Concept-driven AI lessons from Python and ML math to deep learning and AI systems.',
};

export default function LessonsPage() {
  return (
    <section className="section-wrap py-16">
      <SectionHeader title="Lessons" description="Pick a stage and start learning with concepts, visualizations, and code." />
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(lessonData).map(([slug, lesson]) => (
          <Link key={slug} href={`/lessons/${slug}`} className="surface-card p-5 hover:border-sky-400/40 transition">
            <h3 className="text-lg font-semibold">{lesson.title}</h3>
            <p className="text-sm text-slate-400 mt-2">{lesson.concept}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
