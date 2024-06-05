'use client';

import { useCallback, useState } from 'react';
import { generateId } from '@/utils';
import { useRecoilStickerState } from '../../../store';
import { ImageProps } from '../../Sticker/types';
import { useGenerateSticker } from '../api/quries';
import { type StickerItem } from '../../StickerFetcher/api';

export default function useStickerPannel() {
  const { setStickerStates } = useRecoilStickerState();
  const [showStickers, setShowStickers] = useState<boolean>(false);
  const [imageString, setImageString] = useState<string>('');
  const [imageUrls, setImageUrls] = useState<StickerItem[]>([]);

  const { mutate } = useGenerateSticker();

  const handleGenerateSticker = useCallback(() => {
    if (!imageString) {
      // eslint-disable-next-line
      alert('asdf');
      return;
    }
    mutate(imageString, {
      onSuccess: ({ result }) => {
        setImageString('');
        setImageUrls((prev) => [result, ...prev]);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageString]);

  const addStickerToPanel = useCallback(
    ({
      src,
      width,
      height,
      x,
      y,
    }: Omit<ImageProps, 'resetButtonRef' | 'id'>) => {
      setStickerStates((currentImages) => [
        ...currentImages,
        {
          id: generateId(),
          width,
          height,
          x,
          y,
          src,
        },
      ]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    addStickerToPanel,
    showStickers,
    setShowStickers,
    handleGenerateSticker,
    imageString,
    setImageString,
    imageUrls,
  };
}
