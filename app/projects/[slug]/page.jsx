import { notFound } from 'next/navigation';
import { projectList } from '@/components/site-data';

export function generateStaticParams() {
  return projectList.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }) {
  const project = projectList.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="section-wrap py-12">
      <h1 className="font-heading text-4xl">{project.title}</h1>
      <div className="mt-6 grid gap-4">
        <article className="surface-card p-6"><h2 className="font-heading text-xl">Problem description</h2><p className="mt-2 text-muted">{project.problem}</p></article>
        <article className="surface-card p-6"><h2 className="font-heading text-xl">Dataset</h2><p className="mt-2 text-muted">{project.dataset}</p></article>
        <article className="surface-card p-6"><h2 className="font-heading text-xl">Model implementation</h2><p className="mt-2 text-muted">{project.model}</p></article>
        <article className="surface-card p-6"><h2 className="font-heading text-xl">Results and visualization</h2><p className="mt-2 text-muted">{project.results}</p></article>
      </div>
    </section>
  );
}
