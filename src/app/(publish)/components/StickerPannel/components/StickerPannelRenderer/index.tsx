'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { useStickerContext } from '../../../StickerFetcher/StickerContext';
import { type StickerItem } from '../../../StickerFetcher/api';
import { type ImageProps } from '../../../Sticker/types';

export default function StickerPannelRenderer({
  imageUrls,
  addStickerToPanel,
  setShowStickers,
  setEditable,
}: {
  imageUrls: StickerItem[];
  setShowStickers: Dispatch<SetStateAction<boolean>>;
  setEditable: Dispatch<SetStateAction<boolean>>;
  addStickerToPanel: ({
    src,
    width,
    height,
    x,
    y,
  }: Omit<ImageProps, 'id' | 'resetButtonRef'>) => void;
}) {
  const { stickers, fetchRef, isFetching } = useStickerContext();
  const stickerImage = useMemo(
    () => [...imageUrls, ...stickers],
    [stickers, imageUrls],
  );

  return (
    <>
      <div className="grid grid-cols-3 justify-items-center items-center gap-20 mt-20 overflow-scroll">
        {stickerImage.map(({ stickerId, url }) => (
          <Image
            key={`${stickerId}`}
            src={url}
            alt={`${stickerId}`}
            width={60}
            height={60}
            className="cursor-pointer"
            onClick={() => {
              addStickerToPanel({
                src: `${url}`,
                width: 60,
                height: 60,
                x: 300,
                y: 300,
              });
              setShowStickers(() => false);
              setEditable(() => false);
            }}
          />
        ))}
      </div>

      {isFetching ? <div>로딩중입니다....</div> : <div ref={fetchRef} />}
    </>
  );
}
