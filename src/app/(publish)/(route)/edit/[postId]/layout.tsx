import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import { RecoilProvider } from '@/app/lib';
import { Nav, PortalContainer } from '@/components/Common';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import PostDetailFallback from '@/app/blog/[blogId]/post/[postId]/components/PostDetailFallback';
import PostDetailFetcher from '@/app/blog/[blogId]/post/[postId]/components/PostDetailFetcher';

export const metadata: Metadata = {
  title: '글 수정',
  description: 'Glue, The Blog Playground!',
};

export default function EditLayout({
  children,
  params: { postId },
}: Readonly<{
  children: ReactNode;
  params: { postId: string };
}>) {
  return (
    <RecoilProvider>
      <main>
        <Nav>
          <Link href="/" className="text-20 font-luckiest">
            Glue
          </Link>

          <PortalContainer id="publish-container" />
        </Nav>

        <AsyncBoundaryWithQuery pendingFallback={<div>loding 중..</div>}>
          <PostDetailFallback>
            <PostDetailFetcher id={postId}>{children}</PostDetailFetcher>
          </PostDetailFallback>
        </AsyncBoundaryWithQuery>
      </main>
    </RecoilProvider>
  );
}
