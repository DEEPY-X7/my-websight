import HeroSection from '@/components/HeroSection';
import RoadmapDiagram from '@/components/RoadmapDiagram';
import Visualizations from '@/components/Visualizations';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="section-wrap py-8">
        <h2 className="font-heading text-2xl">Learning Roadmap Overview</h2>
        <p className="mt-2 max-w-2xl text-muted">A structured sequence to help beginners build strong intuition before advanced systems work.</p>
        <div className="mt-6">
          <RoadmapDiagram />
        </div>
      </section>
      <Visualizations />
    </>
  );
}
