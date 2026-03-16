import SectionHeader from '@/components/ui/SectionHeader';

export const metadata = {
  title: 'About',
  description: 'About this first-principles AI and machine learning education platform.',
};

export default function AboutPage() {
  return (
    <section className="section-wrap py-16">
      <SectionHeader title="About" description="A focused learning platform built for students learning AI deeply and honestly." />
      <div className="surface-card p-6">
        <p className="text-slate-300">This platform is built to teach AI and machine learning from first principles with a clear system: Python → Math → ML → Deep Learning → AI Systems. It emphasizes authentic learning progress, practical projects, and clear conceptual explanations.</p>
      </div>
    </section>
  );
}
