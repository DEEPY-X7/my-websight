export default function SectionHeader({ title, description }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{title}</h2>
      <p className="mt-2 text-slate-400 max-w-2xl">{description}</p>
    </div>
  );
}
