import RoadmapDiagram from '@/components/RoadmapDiagram';

export const metadata = { title: 'Roadmap | AI Learning Platform' };

export default function RoadmapPage() {
  return (
    <section className="section-wrap py-12">
      <h1 className="font-heading text-4xl">AI Learning Roadmap</h1>
      <p className="mt-3 text-muted">Progress sequentially from Python fundamentals to production AI systems.</p>
      <div className="mt-8">
        <RoadmapDiagram />
      </div>
    </section>
  );
}
