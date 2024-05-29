import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import {
  Nav,
  NavigationIcons,
  PortalContainer,
  Trending,
} from '@/components/Common';
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

        <div className="flex gap-10">
          <NavigationIcons />

          <PortalContainer id="edit-container" />
        </div>
      </Nav>

      <AsyncBoundaryWithQuery pendingFallback={<div>loding 중..</div>}>
        <PostDetailFallback>
          <PostDetailFetcher id={postId}>
            <section className="flex justify-center">
              <section className="w-[620px]">{children}</section>
            </section>
          </PostDetailFetcher>
        </PostDetailFallback>
      </AsyncBoundaryWithQuery>
    </main>
  );
}
