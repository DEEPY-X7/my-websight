import './globals.css';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  metadataBase: new URL('https://deepy-x7.github.io/my-websight'),
  title: 'AI & ML Learning Platform',
  description: 'Structured AI and Machine Learning education platform from first principles.',
  keywords: [
    'Machine Learning from Scratch',
    'AI Learning Roadmap',
    'Python for Machine Learning',
    'Math for Machine Learning',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
