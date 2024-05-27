'use client';

import { useState } from 'react';
import { Layer, Stage } from 'react-konva';
import { cn } from '@/utils';
import { Sticker } from '../Sticker';
import { useRecoilStickerState } from '../../store';

interface KonvaProps {
  enable: boolean;
}

export default function Konva({ enable = false }: KonvaProps) {
  const { stickerStates } = useRecoilStickerState();
  const [selectedId, selectShape] = useState<number | null>(null);

  return (
    <div className={cn('absolute z-[-1]', enable && 'z-[210000000]')}>
      <Stage
        width={1470}
        height={1900}
        onMouseDown={(e) => {
          const clickedOnEmpty = e.target === e.target.getStage();
          if (clickedOnEmpty) {
            selectShape(null);
          }
        }}
      >
        <Layer>
          {stickerStates.map((image) => (
            <Sticker
              onDragEnd={(event) => ({
                ...image,
                [image.x]: event.target.x(),
                [image.y]: event.target.y(),
              })}
              key={image.src}
              image={image}
              onSelect={() => {
                selectShape(image.id);
              }}
              isSelected={selectedId === image.id}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
