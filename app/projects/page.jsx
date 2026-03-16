import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/lib/content';

export const metadata = {
  title: 'Projects',
  description: 'Machine learning projects with datasets, model implementations, and visualized results.',
};

export default function ProjectsPage() {
  return (
    <section className="section-wrap py-16">
      <SectionHeader title="Projects" description="Applied projects to convert theory into practical ML skills." />
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
