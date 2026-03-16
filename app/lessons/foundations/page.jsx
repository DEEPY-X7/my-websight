import Link from 'next/link';
import LessonLayout from '@/components/LessonLayout';

export const metadata = { title: 'Lessons | AI Learning Platform' };

export default function FoundationsLessonPage() {
  return (
    <>
      <LessonLayout
        title="Lesson: Vector Basics for Machine Learning"
        concept="A vector stores magnitude and direction. In ML, vectors represent feature values for each example."
        intuition="Think of each feature as an axis. A sample is a point in space. Models learn a boundary to separate points by target labels."
        code={`import numpy as np\n\nx = np.array([2.0, 4.0, 1.0])\nw = np.array([0.5, 1.2, -0.7])\nscore = np.dot(x, w)\nprint(score)`}
        videoId="aircAruvnKk"
      />
      <section className="section-wrap pb-12">
        <h2 className="font-heading text-2xl">Download notes</h2>
        <Link href="/notes/machine-learning-complete-notes.pdf" className="mt-3 inline-block rounded-lg border border-sky-400/30 px-4 py-2 text-accent">
          Machine Learning Complete Notes (PDF)
        </Link>
      </section>
    </>
  );
}
