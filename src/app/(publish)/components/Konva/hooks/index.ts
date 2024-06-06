'use client';

import { KonvaEventObject } from 'konva/lib/Node';
import { useRecoilStickerState } from '../../../store';

export default function useChangeKonvaImage() {
  const { setStickerStates } = useRecoilStickerState();

  const handleStickerTransformEnd = (
    event: KonvaEventObject<DragEvent>,
    id: number,
  ) => {
    setStickerStates((prev) =>
      prev.map((image) => {
        if (image.id === id) {
          return {
            ...image,
            scaleX: event.target.scaleX(),
            scaleY: event.target.scaleY(),
            rotation: event.target.rotation(),
          };
        }
        return image;
      }),
    );
  };

  const handleStickerDragEnd = (
    event: KonvaEventObject<DragEvent>,
    id: number,
  ) => {
    setStickerStates((prev) =>
      prev.map((image) => {
        if (image.id === id) {
          return {
            ...image,
            x: event.target.x(),
            y: event.target.y(),
          };
        }
        return image;
      }),
    );
  };

  return { handleStickerDragEnd, handleStickerTransformEnd };
}
