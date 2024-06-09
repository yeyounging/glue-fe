'use client';

import Link from 'next/link';
import { NavigationIcons } from '@/components/Common';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pb-70">
      <nav className="flex justify-between px-30 pt-30">
        <Link href="/" className="text-20 font-luckiest">
          Glue
        </Link>
        <NavigationIcons />
      </nav>
      {children}
    </main>
  );
}
