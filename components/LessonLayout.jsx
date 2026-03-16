export default function LessonLayout({ title, concept, intuition, code, videoId }) {
  return (
    <article className="section-wrap py-10">
      <h1 className="font-heading text-3xl md:text-4xl">{title}</h1>
      <section className="mt-8 space-y-6">
        <div className="surface-card p-5">
          <h2 className="font-heading text-xl">Concept explanation</h2>
          <p className="mt-2 text-muted">{concept}</p>
        </div>
        <div className="surface-card p-5">
          <h2 className="font-heading text-xl">Machine Learning intuition</h2>
          <p className="mt-2 text-muted">{intuition}</p>
        </div>
        <div className="surface-card p-5">
          <h2 className="font-heading text-xl">Code example</h2>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-sky-100"><code>{code}</code></pre>
        </div>
        <div className="surface-card p-5">
          <h2 className="font-heading text-xl">Embedded YouTube video</h2>
          <div className="mt-4 aspect-video overflow-hidden rounded-xl">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Lesson video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </article>
  );
}
