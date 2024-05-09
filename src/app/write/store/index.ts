import { atom, useRecoilState } from 'recoil';
import { ImageProps } from '../components/Sticker/types';

export const STICKER_KEY = 'renderedStickers';

// FIXME: 이미지에 맞게 수정
export const StickerState = atom<ImageProps[]>({
  key: STICKER_KEY,
  default: [],
});

export const useRecoilStickerState = () => {
  const [stickerStates, setStickerStates] = useRecoilState(StickerState);
  return { stickerStates, setStickerStates };
};
