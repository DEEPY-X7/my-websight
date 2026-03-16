import Link from 'next/link';
import { roadmapStages } from '@/lib/content';

export default function RoadmapDiagram() {
  return (
    <div className="space-y-4">
      {roadmapStages.map((stage, index) => (
        <div key={stage.id} className="flex gap-4">
          <div className="flex flex-col items-center pt-2">
            <span className="w-8 h-8 rounded-full bg-sky-400/15 border border-sky-300/40 text-sky-200 text-xs font-semibold grid place-items-center">
              {index + 1}
            </span>
            {index < roadmapStages.length - 1 && <span className="w-px flex-1 bg-sky-300/25 mt-2" />}
          </div>
          <article className="surface-card p-5 flex-1 hover:border-sky-400/40 transition">
            <h3 className="text-lg font-semibold">{stage.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{stage.summary}</p>
            <Link href={stage.href} className="inline-block mt-4 text-sky-300 text-sm hover:text-sky-200">
              Open lessons →
            </Link>
          </article>
        </div>
      ))}
    </div>
  );
}
