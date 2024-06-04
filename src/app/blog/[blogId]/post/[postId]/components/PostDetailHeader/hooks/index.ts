'use client';

import { useState, useCallback } from 'react';
import { usePostFollow } from '../api/quries';
import { usePostDetailContext } from '../../PostDetailFetcher/PostDetailContext';

export default function useFollow(postId: number) {
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
