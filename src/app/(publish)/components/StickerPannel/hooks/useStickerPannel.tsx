'use client';

import { useCallback, useState } from 'react';
import { generateId } from '@/utils';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { useRecoilStickerState } from '../../../store';
import { ImageProps } from '../../Sticker/types';
import { useGenerateSticker } from '../api/quries';
import { type StickerItem } from '../../StickerFetcher/api';

export default function useStickerPannel() {
  const { setStickerStates } = useRecoilStickerState();
  const [showStickers, setShowStickers] = useState<boolean>(false);
  const [imageString, setImageString] = useState<string>('');
  const [imageUrls, setImageUrls] = useState<StickerItem[]>([]);
  const { handleLoading, handleError, handleSuccess } = useToastContext();

  const { mutate, isPending } = useGenerateSticker();

  const handleGenerateSticker = useCallback(() => {
    if (!imageString) {
      handleError('이미지 생성어를 입력해주세요.');
      return;
    }
    if (isPending) {
      handleError('이미지가 생성 중이에요.');
      return;
    }

    mutate(imageString, {
      onSettled: () => {
        handleLoading(
          <div>
            이미지 생성중..
            <br />약 15초 정도 소요돼요.
          </div>,
        );
      },

      onSuccess: ({ result }) => {
        setImageString('');
        setImageUrls((prev) => [result, ...prev]);
        handleSuccess('이미지 생성 완료!!');
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageString]);

  const addStickerToPanel = useCallback(
    ({ src }: Pick<ImageProps, 'src'>) => {
      setStickerStates((currentImages) => [
        ...currentImages,
        {
          id: generateId(),
          src,
          width: 60,
          height: 60,
          x: 300,
          y: 300,
          scaleX: 1,
          scaleY: 1,
          rotation: 0,
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
