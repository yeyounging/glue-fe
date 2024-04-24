import { KonvaNodeEvents } from 'react-konva';

export interface ImageProps {
  id: number;
  width: number;
  height: number;
  x: number;
  y: number;
  src: string;
}

export interface StickerProps {
  image: ImageProps;
  onDragEnd: KonvaNodeEvents['onDragEnd'];
  isSelected: boolean;
  onSelect: () => void;
}
