'use client';

import { useEffect, useState } from 'react';
import { useIntersect } from '@/hooks';
import { useGetStickers } from '../quries';

export default function useFetchSticker() {
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } =
    useGetStickers();

  const [stickers, setStickers] = useState(
    data
      ? data.pages.flatMap(
          ({
            result: {
              content: { stickerItems },
            },
          }) => stickerItems,
        )
      : [],
  );

  const fetchRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      setStickers((prev) => [
        ...prev,
        ...data.pages.flatMap(
          ({
            result: {
              content: { stickerItems },
            },
          }) => stickerItems,
        ),
      ]);
    }
  }, [data]);

  useEffect(() => {
    setStickers([]);
    refetch();
  }, [refetch]);

  return { stickers, fetchRef, isFetching };
}
