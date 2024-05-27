import { useRef, useEffect } from 'react';
import useImage from 'use-image';
import Konva from 'konva';
import { Image as KonvaImage, Group, Transformer } from 'react-konva';
import { Image } from 'konva/lib/shapes/Image';
import { StickerProps } from './types';

export function Sticker({
  image: { src, width, x, y },
  onDragEnd,
  isSelected,
  onSelect,
}: StickerProps) {
  const imageRef = useRef<Image>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const [stickerImage] = useImage(src);

  const stickerHeight = stickerImage
    ? (width * stickerImage.height) / stickerImage.width
    : 0;

  useEffect(() => {
    if (!imageRef.current || !trRef.current) {
      return;
    }

    if (isSelected && imageRef.current && trRef.current) {
      trRef.current?.setNode(imageRef.current);
      trRef.current?.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  return (
    <Group
      draggable
      x={x}
      y={y}
      onDragEnd={(event) => {
        onDragEnd?.(event);
      }}
      onClick={onSelect}
    >
      <KonvaImage
        ref={imageRef}
        width={width}
        height={stickerHeight}
        image={stickerImage}
      />

      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) =>
            newBox.width < 5 || newBox.height < 5 ? oldBox : newBox
          }
        />
      )}
    </Group>
  );
}
