import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import { RecoilProvider } from '@/lib';
import { Nav, PortalContainer } from '@/components/Common';

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
        <Nav>
          <Link href="/" className="text-20 font-luckiest">
            Glue
          </Link>
          <PortalContainer id="write-portal-container" />
        </Nav>

        {children}
      </main>
    </RecoilProvider>
  );
}
