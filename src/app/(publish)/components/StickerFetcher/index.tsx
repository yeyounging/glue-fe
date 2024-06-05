'use client';

import { StrictPropsWithChildren } from '@/types';
import { StickerProvider } from './StickerContext';
import useFetchSticker from './hooks';

export default function StickerFetcher({ children }: StrictPropsWithChildren) {
  const { stickers, fetchRef, isFetching } = useFetchSticker();

  return (
    <StickerProvider
      stickers={stickers}
      fetchRef={fetchRef}
      isFetching={isFetching}
    >
      {children}
    </StickerProvider>
  );
}
