import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  metadataBase: new URL('https://my-websight.vercel.app'),
  title: {
    default: 'AI Learning Platform | Machine Learning from Scratch',
    template: '%s | AI Learning Platform',
  },
  description: 'Learn AI from first principles: Python, Math, Machine Learning, Deep Learning, and AI Systems with structured lessons.',
  keywords: [
    'Machine Learning from Scratch',
    'AI Learning Roadmap',
    'Python for Machine Learning',
    'Math for Machine Learning',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
