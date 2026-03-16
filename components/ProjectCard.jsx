import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <article className="surface-card p-5">
      <h3 className="font-heading text-xl">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.problem}</p>
      <ul className="mt-4 space-y-1 text-sm text-slate-300">
        <li><span className="text-accent2">Dataset:</span> {project.dataset}</li>
        <li><span className="text-accent2">Model:</span> {project.model}</li>
        <li><span className="text-accent2">Result:</span> {project.results}</li>
      </ul>
      <Link href={`/projects/${project.slug}`} className="mt-4 inline-block text-sm text-accent hover:underline">View details →</Link>
    </article>
  );
}
