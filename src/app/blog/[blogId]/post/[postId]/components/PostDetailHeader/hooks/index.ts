'use client';

import { useState, useCallback } from 'react';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { copyToClipboard } from '@/utils';
import { useDeletePosting, usePostFollow } from '../api/quries';
import { usePostDetailContext } from '../../PostDetailFetcher/PostDetailContext';

export function useFollow(postId: number) {
  const {
    postDetail: { isSubscribe },
  } = usePostDetailContext();
  const [follow, setFollow] = useState<boolean>(isSubscribe);
  const { mutate: postFollow } = usePostFollow();

  const handleFollow = useCallback(() => {
    postFollow(Number(postId));
    setFollow((prev) => !prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return { handleFollow, follow };
}

export const useHandlePostDetail = (postId: number) => {
  const { handleSuccess } = useToastContext();
  const { follow, handleFollow } = useFollow(Number(postId));
  const { mutate } = useDeletePosting();

  const handleDeletePosting = useCallback(() => {
    // TODO: 한번 더 확인하는 alert 필요
    mutate(Number(postId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const handleCopy = useCallback(
    async (loginMemberId: number) => {
      await copyToClipboard(
        `http://www.glueyourday.kro.kr/blog/${loginMemberId}/post/${postId}`,
      );
      handleSuccess('복사에 성공했어요 !');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [postId],
  );

  return { handleDeletePosting, follow, handleFollow, handleCopy };
};
