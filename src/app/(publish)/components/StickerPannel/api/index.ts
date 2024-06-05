import { http } from '@/api';
import { StickerItem } from '../../StickerFetcher/api';

export const postGenerateSticker = (query: string) =>
  http.post<StickerItem>({
    url: '/stickers',
    params: { prompt: query },
    data: query,
    timeout: 1000000,
  });
