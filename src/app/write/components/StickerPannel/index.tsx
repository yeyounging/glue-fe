'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { Button, Input, StickerClose } from '@/components/Common';
import { cn } from '@/utils';
import { Ghost, Github, Smile, Star } from '../../dummyIcons';
import useStickerPannel from './hooks';

// TODO: Icon이 선택되는 경우 색상이 변경되도록 attribute 설정
const stickerTabs = [
  { id: 0, Icon: Github },
  { id: 1, Icon: Ghost },
  { id: 2, Icon: Smile },
  { id: 3, Icon: Star },
] as const;

const dummyImages = Array.from({ length: 12 }).reduce(
  (arr: Array<{ id: number }>, _, idx) => [...arr, { id: idx + 1 }],
  [],
);

interface StickerPannelProp {
  editable: boolean;
  setEditable: Dispatch<SetStateAction<boolean>>;
}

export default function StickerPannel({
  editable,
  setEditable,
}: StickerPannelProp) {
  const [selectedId, setSelectedId] = useState<number>(0);
  const { addStickerToPanel, showStickers, setShowStickers } =
    useStickerPannel();

  return (
    <aside
      className={cn(
        'w-300 h-[577px] rounded-16 px-23 py-20 absolute top-85 left-30 transition-all duration-200',
        showStickers && 'shadow-background',
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

      {/* TODO: 검색 기능 구현 */}
      {showStickers && (
        <Input
          wrapperClassName="w-full mt-17"
          className="rounded-12 border-1 border-[#D8D8D8] px-17 placeholder:text-[#999]"
          placeholder="검색어 입력"
        />
      )}

      {showStickers && (
        <section className="mt-60">
          <div>
            <div className="flex gap-2 px-20 mb-6">
              {stickerTabs.map(({ id, Icon }) => (
                <Icon
                  key={id}
                  className={cn(
                    'w-34 h-34 p-5 cursor-pointer',
                    id === selectedId && 'bg-[#FFEBDF] rounded-4',
                  )}
                  onClick={() => setSelectedId(id)}
                  selected={id === selectedId}
                />
              ))}
            </div>

            <div className="w-full h-1 bg-[#D8D8D8]" />
          </div>

          <div className="grid grid-cols-3 justify-items-center items-center gap-20 mt-20">
            {dummyImages.map(({ id }) => (
              <Image
                key={`/images/stickers/sticker-${id}.svg`}
                src={`/images/stickers/sticker-${id}.svg`}
                alt={`/images/stickers/sticker-${id}.svg image`}
                width={60}
                height={60}
                className="cursor-pointer"
                onClick={() => {
                  addStickerToPanel({
                    src: `/images/stickers/sticker-${id}.svg`,
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
        </section>
      )}
    </aside>
  );
}
