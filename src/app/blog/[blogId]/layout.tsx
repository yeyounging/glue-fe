import { AsyncBoundaryWithQuery } from '@/react-utils';
import type { Metadata } from 'next';
import BlogFallback from './components/BlogFallback';
import { BlogPageFetcher } from './components/BlogFetcher';

export const metadata: Metadata = {
  title: 'Glue - blog',
  description: 'Glue - blog',
};

export default function layout({
  children,
  params: { blogId },
}: {
  children: React.ReactNode;
  params: { blogId: number };
}) {
  return (
    <AsyncBoundaryWithQuery pendingFallback={<div> Loading...</div>}>
      <BlogFallback>
        <BlogPageFetcher blogId={blogId}>
          <main className="text-[#171717]">{children}</main>;
        </BlogPageFetcher>
      </BlogFallback>
    </AsyncBoundaryWithQuery>
  );
}
