'use client';

import { generateContext } from '@/react-utils';
import { BlogPageInfo, BoardResponse } from './types';

export const [BlogPageProvider, useBlogPageContext] =
  generateContext<BlogPageInfo>({
    name: 'blog-page-context',
  });

export const [BoardProvider, useBoardContext] = generateContext<BoardResponse>({
  name: 'board-context',
});
