'use client';

import { safeSeesionStorage } from '@/utils';
import { EDITOR_KEY } from '@/components/Common/Editor/constants';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { useCallback } from 'react';
import { usePost } from '../api/queries';

export function useWritePost() {
  const { handleError } = useToastContext()!;
  // TODO: blogId 사용
  const { mutate } = usePost(8);

  // TODO: refactor
  const handleSubmitPost = useCallback(
    (title: string, publishState: 'publish' | 'save' = 'save') => {
      const content = safeSeesionStorage.get(EDITOR_KEY) || '';

      if (!content) {
        handleError('내용을 입력해주세요', { duration: 2000 });
        return;
      }

      if (!title) {
        handleError('제목을 입력해주세요', { duration: 2000 });
        return;
      }

      // TODO: blogId
      mutate({
        blogId: 10,
        title,
        content,
        temporaryState: publishState === 'publish',
        categoryName: '',
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return { handleSubmitPost };
}
