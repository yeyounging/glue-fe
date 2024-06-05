'use client';

import { generateContext } from '@/react-utils';
import { RefObject } from 'react';
import { StickerItem } from './api';

export const [StickerProvider, useStickerContext] = generateContext<{
  stickers: StickerItem[];
  fetchRef: RefObject<HTMLDivElement>;
  isFetching: boolean;
}>({
  name: 'sticker-context',
});
