import RoadmapDiagram from '@/components/RoadmapDiagram';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata = {
  title: 'Roadmap',
  description: 'Visual AI learning roadmap: Python, Mathematics, Machine Learning, Deep Learning, AI Systems.',
};

export default function RoadmapPage() {
  return (
    <section className="section-wrap py-16">
      <SectionHeader title="AI Learning Roadmap" description="Follow the complete stage-wise learning sequence." />
      <RoadmapDiagram />
    </section>
  );
}
