'use client';

import { ReactNode } from 'react';
import { BlogPageProvider, BoardProvider } from './BlogContext';
import { useBlogPage, useBorad } from './queries';

interface BlogPageFetcherProps {
  children: ReactNode;
  blogId: number;
}

interface BoardFetcherProps {
  children: ReactNode;
  blogId: number;
  page: number;
}

export function BlogPageFetcher({ children, blogId }: BlogPageFetcherProps) {
  const { data } = useBlogPage(blogId);
  return <BlogPageProvider {...data}>{children}</BlogPageProvider>;
}

export function BoardFetcher({
  children,
  blogId,
  page = 0,
}: BoardFetcherProps) {
  const { data } = useBorad(blogId, page);
  return <BoardProvider {...data}>{children}</BoardProvider>;
}
