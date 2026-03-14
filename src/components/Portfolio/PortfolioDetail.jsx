import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "./portfolio-loader";

function ChartCard({ title, bars }) {
  return (
    <article className="surface-card p-5">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>{bar.label}</span>
              <span>{bar.value}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded">
              <div className="h-2 rounded bg-gradient-to-r from-sky-400 to-cyan-400" style={{ width: `${bar.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function DetailBlock({ title, text }) {
  return (
    <article className="surface-card p-5">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-slate-300 text-sm mt-2">{text}</p>
    </article>
  );
}

export default function PortfolioDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen grid place-items-center text-slate-200">
        <button onClick={() => navigate("/projects")} className="px-4 py-2 border border-slate-600 rounded-lg hover:border-sky-300">
          Project not found. Back to Projects
        </button>
      </div>
    );
  }

  const prevProject = projects[index - 1];
  const nextProject = projects[index + 1];

  return (
    <section className="py-14 bg-[#0F172A] text-slate-100 px-4">
      <div className="section-wrap">
        {/* Major redesign: project details now follow an ML case-study structure for recruiter readability. */}
        <Link to="/projects" className="text-sm text-sky-300">← Back to Projects</Link>
        <h1 className="text-4xl font-bold mt-4">{project.title}</h1>
        <p className="text-slate-400 mt-2 max-w-3xl">{project.desc}</p>

        <img src={project.image} alt={project.title} className="w-full max-h-[380px] object-cover rounded-2xl mt-6 border border-slate-700" />

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <DetailBlock title="Problem Statement" text={project.problemStatement} />
          <DetailBlock title="Dataset Explanation" text={project.dataset} />
          <DetailBlock title="EDA Insights" text={project.eda} />
          <DetailBlock title="Feature Engineering" text={project.featureEngineering} />
          <DetailBlock title="Model Used" text={project.modelUsed} />
          <DetailBlock title="Evaluation Metrics" text={project.evaluationMetrics} />
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Data Visualizations</h2>
        <div className="grid lg:grid-cols-3 gap-4">
          <ChartCard title="Feature Importance" bars={[{ label: "Fare", value: 78 }, { label: "Age", value: 62 }, { label: "Pclass", value: 56 }]} />
          <ChartCard title="Distribution Snapshot" bars={[{ label: "Train Data", value: 80 }, { label: "Validation Data", value: 20 }, { label: "Missing handled", value: 92 }]} />
          <ChartCard title="Confusion Matrix (Normalized)" bars={[{ label: "True Positive", value: 74 }, { label: "True Negative", value: 83 }, { label: "Error", value: 17 }]} />
        </div>

        <article className="surface-card p-5 mt-8">
          <h2 className="text-xl font-semibold">Conclusion</h2>
          <p className="text-slate-300 text-sm mt-2">{project.resultsDetail}</p>
        </article>

        <div className="flex justify-between mt-10 text-sm">
          {prevProject ? <Link to={`/projects/${prevProject.slug}`} className="text-slate-300 hover:text-sky-300">← {prevProject.title}</Link> : <span />}
          {nextProject ? <Link to={`/projects/${nextProject.slug}`} className="text-slate-300 hover:text-sky-300">{nextProject.title} →</Link> : <span />}
        </div>
      </div>
    </section>
  );
}
