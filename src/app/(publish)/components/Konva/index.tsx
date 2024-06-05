'use client';

import { useState } from 'react';
import { Layer, Stage } from 'react-konva';
import { cn } from '@/utils';
import { Sticker } from '../Sticker';
import { useRecoilStickerState } from '../../store';
import useChangeKonvaImage from './hooks';

interface KonvaProps {
  enable: boolean;
}

export default function Konva({ enable = false }: KonvaProps) {
  const { stickerStates } = useRecoilStickerState();
  const [selectedId, selectShape] = useState<number | null>(null);
  const { handleStickerDragEnd, handleStickerTransformEnd } =
    useChangeKonvaImage();

  return (
    <div className={cn('absolute z-[-1]', enable && 'z-[210000000]')}>
      <Stage
        width={1470}
        height={1900}
        onMouseDown={(e) => {
          if (e.target === e.target.getStage()) {
            selectShape(null);
          }
        }}
      >
        <Layer>
          {stickerStates.map((image) => (
            <Sticker
              onTransformEnd={(event) =>
                handleStickerTransformEnd(event, image.id)
              }
              onDragEnd={(event) => handleStickerDragEnd(event, image.id)}
              key={image.id}
              image={image}
              onSelect={() => selectShape(image.id)}
              isSelected={selectedId === image.id}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
