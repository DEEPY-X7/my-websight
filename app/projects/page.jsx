import ProjectCard from '@/components/ProjectCard';
import { projectList } from '@/components/site-data';

export const metadata = { title: 'Projects | AI Learning Platform' };

export default function ProjectsPage() {
  return (
    <section className="section-wrap py-12">
      <h1 className="font-heading text-4xl">Projects</h1>
      <p className="mt-3 text-muted">Learn by building practical machine learning systems.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projectList.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
