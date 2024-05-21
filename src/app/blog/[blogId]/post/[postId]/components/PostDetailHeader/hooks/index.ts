'use client';

import { useState, useCallback } from 'react';
import { usePostFollow } from '../api/quries';

export default function useFollow(postId: number) {
  const [follow, setFollow] = useState<boolean>(false);
  const { mutate: postFollow } = usePostFollow();

  const handleFollow = useCallback(() => {
    postFollow(Number(postId));
    setFollow((prev) => !prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return { handleFollow, follow };
}
