import Link from 'next/link';
import { roadmapStages } from '@/lib/content';

export default function RoadmapDiagram() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {roadmapStages.map((stage) => (
        <article key={stage.id} className="surface-card p-5 hover:border-sky-400/40 transition">
          <h3 className="text-lg font-semibold">{stage.title}</h3>
          <p className="mt-2 text-sm text-slate-400">{stage.summary}</p>
          <Link href={stage.href} className="inline-block mt-4 text-sky-300 text-sm hover:text-sky-200">
            Open lessons →
          </Link>
        </article>
      ))}
    </div>
  );
}
