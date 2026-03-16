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
          title="Structured AI Learning"
          description="A complete learning journey from Python foundations to practical AI systems."
        />
        <RoadmapDiagram />
      </section>
      <section className="section-wrap py-16">
        <SectionHeader
          title="Project-Based Understanding"
          description="Learn by building practical machine learning projects with datasets, models, and measurable outcomes."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {projects.slice(0, 2).map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </>
  );
}
