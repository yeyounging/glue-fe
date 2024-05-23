import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Nav, NavigationIcons } from '@/components/Common';

export const metadata: Metadata = {
  title: '매치',
  description: 'Glue, The Blog Playground!',
};

export default function MatchLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="w-full h-full bg-[#FFF5F8]">
      <Nav>
        <Link href="/" className="text-20 font-luckiest">
          Glue
        </Link>

        <div className="flex gap-20">
          <NavigationIcons />
        </div>
      </Nav>

      {children}
    </main>
  );
}
