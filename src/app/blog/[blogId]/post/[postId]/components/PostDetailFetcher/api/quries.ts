'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getPostDetail } from '.';

export const usePostDetail = (id: number) =>
  useSuspenseQuery({
    queryKey: ['post-detail', id],
    queryFn: () => getPostDetail(id),
    refetchOnMount: false,
    select: (data) => data.result,
  });
