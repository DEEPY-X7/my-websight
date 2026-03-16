import { notFound } from 'next/navigation';
import { projects } from '@/lib/content';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return notFound();

  return (
    <section className="section-wrap py-16">
      <article className="surface-card p-6 space-y-5">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <section><h2 className="text-xl font-semibold">Problem Description</h2><p className="text-slate-300 mt-2">{project.problem}</p></section>
        <section><h2 className="text-xl font-semibold">Dataset</h2><p className="text-slate-300 mt-2">{project.dataset}</p></section>
        <section><h2 className="text-xl font-semibold">Model Implementation</h2><p className="text-slate-300 mt-2">{project.model} using {project.tools}.</p></section>
        <section><h2 className="text-xl font-semibold">Results and Visualization</h2><p className="text-slate-300 mt-2">{project.results}</p></section>
      </article>
    </section>
  );
}
