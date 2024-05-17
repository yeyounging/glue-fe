'use client';

import { generateContext } from '@/react-utils';
import { PostDetailResponse } from './types';

export const [PostDetailProvider, usePostDetailContext] =
  generateContext<PostDetailResponse>({
    name: 'post-detail',
  });
