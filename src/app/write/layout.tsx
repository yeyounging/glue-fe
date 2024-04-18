import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { PortalContainer } from '@/components/Common';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '글 작성',
  description: 'Glue, The Blog Playground!',
};

export default function WriteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main>
      <nav className="flex justify-between px-30 pt-30">
        <Link href="/" className="text-20 font-luckiest">
          Glue
        </Link>

        <PortalContainer id="write-portal-container" />
      </nav>
      {children}
    </main>
  );
}
