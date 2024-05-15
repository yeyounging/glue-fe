import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Nav, PortalContainer, Trending } from '@/components/Common';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import PostDetailFetcher from './components/PostDetailFetcher';
import PostDetailFallback from './components/PostDetailFallback';

export const metadata: Metadata = {
  // TODO: 동적 메타데이터 변경
  title: '글 상세 페이지',
  description: 'Glue, The Blog Playground!',
};

export default function WriteLayout({
  children,
  params: { postId },
}: Readonly<{
  children: ReactNode;
  params: { postId: string };
}>) {
  return (
    <main>
      <Nav>
        <div className="flex gap-14">
          <Link href="/" className="text-20 font-luckiest">
            Glue
          </Link>

          <Link href="/trending">
            <Trending />
          </Link>
        </div>

        <PortalContainer id="post-detail" />
      </Nav>

      <AsyncBoundaryWithQuery pendingFallback={<div>loding 중..</div>}>
        <PostDetailFallback>
          <PostDetailFetcher id={postId}>{children}</PostDetailFetcher>
        </PostDetailFallback>
      </AsyncBoundaryWithQuery>
    </main>
  );
}
