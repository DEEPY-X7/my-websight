import { notFound } from 'next/navigation';
import LessonLayout from '@/components/LessonLayout';
import { lessonData } from '@/lib/content';
import VectorVisualization from '@/components/visualizations/VectorVisualization';
import DotProductVisualization from '@/components/visualizations/DotProductVisualization';
import GradientDescentVisualization from '@/components/visualizations/GradientDescentVisualization';
import DecisionBoundaryVisualization from '@/components/visualizations/DecisionBoundaryVisualization';

const vizMap = {
  'python-foundations': <VectorVisualization />,
  'math-for-ml': <DotProductVisualization />,
  'ml-algorithms': <DecisionBoundaryVisualization />,
  'deep-learning-basics': <GradientDescentVisualization />,
  'ai-systems': <DecisionBoundaryVisualization />,
};

export function generateStaticParams() {
  return Object.keys(lessonData).map((slug) => ({ slug }));
}

export default async function LessonPage({ params }) {
  const { slug } = await params;
  const lesson = lessonData[slug];
  if (!lesson) return notFound();

  return (
    <section className="section-wrap py-16">
      <LessonLayout lesson={lesson}>{vizMap[slug] || <VectorVisualization />}</LessonLayout>
    </section>
  );
}
