import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <article className="surface-card p-5">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{project.problem}</p>
      <ul className="mt-4 text-sm text-slate-300 space-y-1">
        <li><span className="text-slate-500">Dataset:</span> {project.dataset}</li>
        <li><span className="text-slate-500">Model:</span> {project.model}</li>
        <li><span className="text-slate-500">Tools:</span> {project.tools}</li>
      </ul>
      <Link href={`/projects/${project.slug}`} className="text-sky-300 text-sm mt-4 inline-block">View details →</Link>
    </article>
  );
}
