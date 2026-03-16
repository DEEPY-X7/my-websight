import SectionHeader from '@/components/ui/SectionHeader';
import RoadmapDiagram from '@/components/RoadmapDiagram';

export const metadata = {
  title: 'Start Here | AI from Fundamentals',
  description: 'Understand AI, machine learning, and how to use this platform with a first-principles roadmap.',
};

export default function StartHerePage() {
  return (
    <section className="section-wrap py-16 space-y-8">
      <SectionHeader
        title="Start Here"
        description="Understand what AI and ML are, then follow a clear study system to build depth over time."
      />
      <div className="grid md:grid-cols-2 gap-4">
        <article className="surface-card p-6">
          <h3 className="text-xl font-semibold">What is Artificial Intelligence?</h3>
          <p className="mt-2 text-slate-300">
            Artificial Intelligence is the broader goal of building systems that can perform tasks requiring reasoning,
            pattern recognition, and decision making.
          </p>
        </article>
        <article className="surface-card p-6">
          <h3 className="text-xl font-semibold">What is Machine Learning?</h3>
          <p className="mt-2 text-slate-300">
            Machine Learning is a subfield of AI where algorithms learn from data to make predictions or decisions,
            instead of relying only on manually written rules.
          </p>
        </article>
        <article className="surface-card p-6">
          <h3 className="text-xl font-semibold">How to Use This Platform</h3>
          <p className="mt-2 text-slate-300">
            Follow the roadmap stages in sequence, complete concept lessons, run the Python snippets, and reinforce
            understanding by completing project implementations.
          </p>
        </article>
        <article className="surface-card p-6">
          <h3 className="text-xl font-semibold">Learning Roadmap</h3>
          <p className="mt-2 text-slate-300">
            The platform progression is: Python → Mathematics → Machine Learning → Deep Learning → AI Systems.
            This sequence ensures fundamentals are built before advanced topics.
          </p>
        </article>
      </div>
      <RoadmapDiagram />
    </section>
  );
}
