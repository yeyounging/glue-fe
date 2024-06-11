'use client';

import { useCallback } from 'react';
import { safeSeesionStorage } from '@/utils';
import { EDITOR_KEY } from '@/components/Common/Editor/constants';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { usePost } from '../api/queries';
import { BlogPostRequest, NonParameterBlogPostRequest } from '../api';
import { useRecoilStickerState } from '../store';

export default function useWritePost() {
  const { handleError } = useToastContext();
  const { stickerStates } = useRecoilStickerState();
  const { mutate } = usePost();

  const handleSubmitPost = useCallback(
    (
      post: Omit<BlogPostRequest, NonParameterBlogPostRequest>,
      publishState: 'publish' | 'save' = 'save',
    ) => {
      const content = safeSeesionStorage.get(EDITOR_KEY) || '';
      const { title, ...otherProps } = post;

      if (!title) {
        handleError('제목을 입력해주세요', { duration: 1500 });
        return;
      }

      if (!content) {
        handleError('내용을 입력해주세요', { duration: 1500 });
        return;
      }

      // eslint-disable-next-line
      const parsedContent = JSON.parse(content) as any[];
      const photoUrls = parsedContent
        .filter(({ type }) => type === 'image')
        .map(({ props: { url } }) => url);

      mutate({
        title,
        content,
        temporaryState: publishState === 'publish',
        postStickerItemList: stickerStates.map((sticker) => ({
          ...sticker,
          xLocation: sticker.x,
          yLocation: sticker.y,
          url: sticker.src,
          stickerId: sticker.id,
        })),
        photoUrls,
        ...otherProps,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stickerStates],
  );

  return { handleSubmitPost };
}
