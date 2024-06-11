'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getBlogPageInfo, getBoard } from './api';

export const useBlogPage = (blogId: number) =>
  useSuspenseQuery({
    queryKey: ['blog-page', blogId],
    queryFn: () => getBlogPageInfo(blogId),
    refetchOnMount: false,
    select: (data) => data.result,
  });

export const useBorad = (blogId: number, page: number) =>
  useSuspenseQuery({
    queryKey: ['blog-borad', page],
    queryFn: () => getBoard(blogId, page, 10),
    refetchOnMount: false,
    select: (data) => data.result,
  });
