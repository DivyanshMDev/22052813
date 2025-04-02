
import './globals.css';
import Navbar from './components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Analytics',
  description: 'Real-time social media analytics dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
