'use client';

import { Dispatch, SetStateAction } from 'react';
import { Button, Input, StickerClose, StickerStar } from '@/components/Common';
import { cn } from '@/utils';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import useStickerPannel from './hooks/useStickerPannel';
import StickerPannelRenderer from './components/StickerPannelRenderer';
import StickerFetcher from '../StickerFetcher';

interface StickerPannelProp {
  editable: boolean;
  setEditable: Dispatch<SetStateAction<boolean>>;
}

export default function StickerPannel({
  editable,
  setEditable,
}: StickerPannelProp) {
  const {
    addStickerToPanel,
    showStickers,
    setShowStickers,
    handleGenerateSticker,
    imageString,
    setImageString,
    imageUrls,
  } = useStickerPannel();

  return (
    <aside
      className={cn(
        'w-300 h-[577px] rounded-16 px-23 py-20 absolute top-85 left-30 transition-all duration-200 overflow-scroll',
        showStickers && 'shadow-background bg-white',
        !editable && 'z-[210000001]',
      )}
    >
      <div className="flex justify-between">
        <Button
          onClick={() => {
            setEditable((prev) => !prev);
            setShowStickers((prev) => !prev);
          }}
          className="select-none text-[26px] bg-transparent font-luckiest !text-primary text-shadow-primary transition-all duration-200"
        >
          stickers
        </Button>

        {showStickers && (
          <Button
            onClick={() => setShowStickers(() => false)}
            className="bg-transparent"
          >
            <StickerClose />
          </Button>
        )}
      </div>

      {showStickers && (
        <>
          <Input
            value={imageString}
            onValueChange={setImageString}
            wrapperClassName="w-full mt-17"
            className="rounded-12 border-1 border-[#D8D8D8] px-17 placeholder:text-[#999]"
            placeholder="검색어 입력"
          />
          <div className="flex justify-end">
            <Button
              onClick={handleGenerateSticker}
              rightIcon={<StickerStar />}
              className="bg-transparent gap-5 m-5"
            >
              생성하기
            </Button>
          </div>
        </>
      )}

      {showStickers && (
        <section className="mt-20 overflow-scroll">
          <div className="w-full h-1 bg-[#D8D8D8]" />

          <AsyncBoundaryWithQuery>
            <StickerFetcher>
              <StickerPannelRenderer
                imageUrls={imageUrls}
                addStickerToPanel={addStickerToPanel}
                setEditable={setEditable}
                setShowStickers={setShowStickers}
              />
            </StickerFetcher>
          </AsyncBoundaryWithQuery>
        </section>
      )}
    </aside>
  );
}
