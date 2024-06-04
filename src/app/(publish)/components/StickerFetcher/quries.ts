'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getSticker } from './api';

export const useGetStickers = () =>
  useSuspenseInfiniteQuery({
    queryKey: ['/stickers/basics'],
    queryFn: ({ pageParam }: { pageParam: number }) => getSticker(pageParam),
    initialPageParam: 0,
    getNextPageParam: ({ result }) => {
      const { isLast, number } = result;
      return isLast ? undefined : number + 1;
    },
  });
