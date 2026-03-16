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
          title="Learning Path"
          description="Progress through a clear sequence: foundations first, then models, then production thinking."
        />
        <RoadmapDiagram />
      </section>

      <section className="section-wrap py-16">
        <SectionHeader
          title="How This Platform Teaches"
          description="Every module combines concept depth, visual intuition, practical code, and project application."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'First Principles',
              description: 'Topics begin from simple mental models before formulas and implementation details.',
            },
            {
              title: 'Systematic Progression',
              description: 'You move stage-by-stage from Python and mathematics to deep learning and AI systems.',
            },
            {
              title: 'Build and Reflect',
              description: 'Projects reinforce each concept with datasets, baselines, and measurable outcomes.',
            },
          ].map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-400 mt-2">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-16">
        <SectionHeader
          title="Practice Projects"
          description="Apply what you learn to practical machine learning tasks with transparent model workflows."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {projects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </>
  );
}
