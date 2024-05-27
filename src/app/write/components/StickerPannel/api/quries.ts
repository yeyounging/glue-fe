import { useMutation } from '@tanstack/react-query';
import { postGenerateSticker } from '.';

export const useGenerateSticker = () =>
  useMutation({
    mutationKey: ['generate-sticker'],
    mutationFn: (query: string) => postGenerateSticker(query),
  });
