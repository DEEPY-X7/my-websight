import SectionHeader from '@/components/ui/SectionHeader';
import RoadmapDiagram from '@/components/RoadmapDiagram';

export const metadata = {
  title: 'Start Here',
  description: 'Begin your AI learning journey with first-principles explanations and roadmap guidance.',
};

export default function StartHerePage() {
  return (
    <section className="section-wrap py-16 space-y-8">
      <SectionHeader title="Start Here" description="A beginner-friendly introduction to AI and machine learning." />
      <div className="grid md:grid-cols-2 gap-4">
        <article className="surface-card p-6"><h3 className="text-xl font-semibold">What is Artificial Intelligence?</h3><p className="mt-2 text-slate-300">AI is the broader field of building systems that perform tasks requiring intelligent behavior.</p></article>
        <article className="surface-card p-6"><h3 className="text-xl font-semibold">What is Machine Learning?</h3><p className="mt-2 text-slate-300">Machine learning is a subset of AI where systems learn patterns from data instead of explicit rules.</p></article>
        <article className="surface-card p-6"><h3 className="text-xl font-semibold">How to Use This Platform</h3><p className="mt-2 text-slate-300">Follow stages in order, complete lessons, run code examples, and revisit visualizations to build intuition.</p></article>
        <article className="surface-card p-6"><h3 className="text-xl font-semibold">Roadmap Overview</h3><p className="mt-2 text-slate-300">The path moves from coding tools and math to modern model design and AI system deployment.</p></article>
      </div>
      <RoadmapDiagram />
    </section>
  );
}
