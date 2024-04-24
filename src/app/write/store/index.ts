import { atom } from 'recoil';
import { ImageProps } from '../components/Sticker/types';

export const STICKER_KEY = 'renderedStickers';

// FIXME: 이미지에 맞게 수정
export const StickerState = atom<ImageProps[]>({
  key: STICKER_KEY,
  default: [],
});
