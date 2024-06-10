'use client';

import { ReactNode } from 'react';
import { BlogPageProvider } from './BlogContext';
import { useBlogPage } from './queries';

interface BlogPageFetcherProps {
  children: ReactNode;
  blogId: number;
}

export function BlogPageFetcher({ children, blogId }: BlogPageFetcherProps) {
  const { data } = useBlogPage(blogId);

  return <BlogPageProvider {...data}>{children}</BlogPageProvider>;
}
