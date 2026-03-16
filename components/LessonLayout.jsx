import Link from 'next/link';

export default function LessonLayout({ lesson, children }) {
  return (
    <article className="space-y-8">
      <section className="surface-card p-6">
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
        <h2 className="text-xl font-semibold mt-4">Concept Explanation</h2>
        <p className="mt-2 text-slate-300">{lesson.concept}</p>
      </section>

      <section className="surface-card p-6">
        <h2 className="text-xl font-semibold">Visualization</h2>
        <div className="mt-4">{children}</div>
      </section>

      <section className="surface-card p-6">
        <h2 className="text-xl font-semibold">Python Code Example</h2>
        <pre className="mt-3 text-xs bg-slate-900 p-4 rounded-lg overflow-x-auto text-slate-200">{lesson.code}</pre>
      </section>

      <section className="surface-card p-6">
        <h2 className="text-xl font-semibold">Machine Learning Intuition</h2>
        <p className="mt-3 text-slate-300">{lesson.intuition}</p>
      </section>

      <section className="surface-card p-6">
        <h2 className="text-xl font-semibold">Embedded YouTube Video</h2>
        <div className="mt-3 aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${lesson.videoId}`}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="surface-card p-6">
        <h2 className="text-xl font-semibold">Download Notes</h2>
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <a href="/notes/machine-learning-complete-notes.pdf" className="text-sky-300 hover:text-sky-200">
            Download Machine Learning Complete Notes (PDF)
          </a>
          <Link href="/notes" className="text-slate-300 hover:text-slate-100">
            Open notes page →
          </Link>
        </div>
      </section>
    </article>
  );
}
