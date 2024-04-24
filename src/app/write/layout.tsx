import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import { PortalContainer } from '@/components/Common';
import { RecoilProvider } from '@/lib';

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
    <RecoilProvider>
      <main>
        <nav className="flex justify-between px-30 pt-30">
          <Link href="/" className="text-20 font-luckiest">
            Glue
          </Link>

          <PortalContainer id="write-portal-container" />
        </nav>

        {children}
      </main>
    </RecoilProvider>
  );
}
