import Link from 'next/link';
import { roadmapStages } from './site-data';

export default function RoadmapDiagram() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {roadmapStages.map((stage, index) => (
        <article key={stage.id} className="surface-card p-5">
          <p className="text-xs text-accent2">Step {index + 1}</p>
          <h3 className="mt-1 font-heading text-xl">{stage.title}</h3>
          <p className="mt-2 text-sm text-muted">{stage.summary}</p>
          <Link href="/lessons/foundations" className="mt-4 inline-block text-sm text-accent hover:underline">
            Explore lessons →
          </Link>
        </article>
      ))}
    </div>
  );
}
