'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getBlogPageInfo } from './api';

export const useBlogPage = (blogId: number) =>
  useSuspenseQuery({
    queryKey: ['blog-page', blogId],
    queryFn: () => getBlogPageInfo(blogId),
    refetchOnMount: false,
    select: (data) => data.result,
  });
