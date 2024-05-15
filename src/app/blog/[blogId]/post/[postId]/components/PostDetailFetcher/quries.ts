'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getPostDetail } from './api';
import { PostDetailResponse } from './types';

export const usePostDetail = (id: number) =>
  useSuspenseQuery({
    queryKey: ['post-detail', id],
    queryFn: () => getPostDetail<PostDetailResponse>(id),
    refetchOnMount: false,
    select: (data) => data.result,
  });
