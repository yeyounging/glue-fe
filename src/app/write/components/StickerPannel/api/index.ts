import { http } from '@/api';

export interface PostGenerateStickerResponse {
  stickerId: number;
  url: string;
}

export const postGenerateSticker = (query: string) =>
  http.post<PostGenerateStickerResponse>({
    url: '/stickers',
    params: { prompt: query },
    data: query,
    timeout: 1000000,
  });
