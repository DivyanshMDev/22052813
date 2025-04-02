// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Social Media Analytics</div>
          <div className="space-x-4">
            <Link href="/" className={`${pathname === '/' ? 'font-bold underline' : ''}`}>
              Top Users
            </Link>
            <Link href="/trending" className={`${pathname === '/trending' ? 'font-bold underline' : ''}`}>
              Trending Posts
            </Link>
            <Link href="/feed" className={`${pathname === '/feed' ? 'font-bold underline' : ''}`}>
              Feed
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
