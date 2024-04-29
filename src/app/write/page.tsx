'use client';

import { useState } from 'react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import {
  Button,
  Input,
  NavigationIcons,
  Pencil,
  StickerClose,
  StickerStar,
  Switch,
} from '@/components/Common';
import { usePortal } from '@/hooks';
import { cn, generateId } from '@/utils';
import { Ghost, Github, Smile, Star } from './dummyIcons';
import { StickerState } from './store';
import { ImageProps } from './components/Sticker/types';

const Konva = dynamic(() => import('./components/Konva'), { ssr: false });
const Editor = dynamic(() => import('@/components/Common/Editor'), {
  ssr: false,
});

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

export default function Page() {
  const port = usePortal({ id: 'write-portal-container' });
  const [title, setTitle] = useState<string>('');
  const [showStickers, setShowStickers] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [editable, setEditable] = useState<boolean>(true);
  const setRenderedStickers = useSetRecoilState(StickerState);

  const addStickerToPanel = ({
    src,
    width,
    height,
    x,
    y,
  }: Omit<ImageProps, 'resetButtonRef' | 'id'>) => {
    setRenderedStickers((currentImages) => [
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
  };

  return (
    <section className="relative flex justify-center">
      {port?.(
        <div className="flex gap-20">
          <Switch
            checked={editable}
            handleChange={() => setEditable(!editable)}
            LeftIcon={
              <StickerStar className="w-13 h-13 absolute top-[4.5px] left-5 z-10" />
            }
            RightIcon={
              <Pencil
                color={editable ? '#F08D53' : '#999999'}
                className="w-13 h-13 absolute top-[4.5px] right-[5.5px] z-10"
              />
            }
          />

          <NavigationIcons />

          <div className="flex gap-12 font-pretendard font-medium">
            {/* TODO: 글 업로드 */}
            <Button className="bg-[#E3E3E3] w-60 h-30">저장</Button>
            <Button className="bg-primary text-[white] w-60 h-30">발행</Button>
          </div>
        </div>,
      )}

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
              if (editable) {
                setEditable(false);
              } else {
                setEditable(true);
              }
              setShowStickers(!showStickers);
            }}
            className="select-none text-[26px] bg-transparent font-luckiest !text-primary text-shadow-primary transition-all duration-200"
          >
            stickers
          </Button>

          {showStickers && (
            <Button
              onClick={() => setShowStickers(false)}
              className="bg-transparent"
            >
              <StickerClose />
            </Button>
          )}
        </div>

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
                    setShowStickers(false);
                    setEditable(false);
                  }}
                />
              ))}
            </div>
          </section>
        )}
      </aside>

      <Konva enable={!editable} />

      <section className="w-[620px]">
        <Input
          wrapperClassName="px-45"
          className="outline-none placeholder:text-[#999] text-36"
          placeholder="제목을 입력해주세요."
          value={title}
          onValueChange={setTitle}
        />

        <div className="h-1 bg-[#D8D8D8] mx-45" />

        <Editor className="w-full min-h-[500px] rounded-[4px] py-10 mt-42" />
      </section>
    </section>
  );
}
