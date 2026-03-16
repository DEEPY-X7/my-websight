export const metadata = { title: 'Start Here | AI Learning Platform' };

export default function StartHerePage() {
  return (
    <section className="section-wrap py-12 space-y-6">
      <h1 className="font-heading text-4xl">Start Here</h1>
      <div className="surface-card p-6">
        <h2 className="font-heading text-2xl">What is Artificial Intelligence?</h2>
        <p className="mt-2 text-muted">Artificial Intelligence is the field of building systems that can make decisions or predictions using data and rules. It includes search, planning, and learning-based techniques.</p>
      </div>
      <div className="surface-card p-6">
        <h2 className="font-heading text-2xl">What is Machine Learning?</h2>
        <p className="mt-2 text-muted">Machine Learning is a subset of AI where models learn patterns from data instead of relying on hard-coded rules. You train a model, evaluate it, and improve it iteratively.</p>
      </div>
      <div className="surface-card p-6">
        <h2 className="font-heading text-2xl">How to use this platform</h2>
        <p className="mt-2 text-muted">Follow the roadmap stage-by-stage. Study the lesson concept, run the code, inspect visualizations, then test understanding with projects and notes.</p>
      </div>
    </section>
  );
}
