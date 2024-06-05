import { KonvaEventObject } from 'konva/lib/Node';
import { KonvaNodeEvents } from 'react-konva';

export interface ImageProps {
  id: number;
  width: number;
  height: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

export interface StickerProps {
  image: ImageProps;
  onDragEnd: KonvaNodeEvents['onDragEnd'];
  isSelected: boolean;
  onSelect: () => void;
  onTransformEnd: (event: KonvaEventObject<DragEvent>) => void;
}
