import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/ui/SectionHeader';
import RoadmapDiagram from '@/components/RoadmapDiagram';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="section-wrap py-16">
        <SectionHeader
          title="AI Learning Roadmap"
          description="A structured learning system from Python foundations to practical AI systems engineering."
        />
        <RoadmapDiagram />
      </section>
      <section className="section-wrap py-16">
        <SectionHeader
          title="Build with Projects"
          description="Practice concepts through focused machine learning projects with clean problem-to-results breakdowns."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {projects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </>
  );
}
