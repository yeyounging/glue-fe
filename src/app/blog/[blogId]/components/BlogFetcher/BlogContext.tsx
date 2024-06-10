'use client';

import { generateContext } from '@/react-utils';
import { BlogPageInfo } from './types';

export const [BlogPageProvider, useBlogPageContext] =
  generateContext<BlogPageInfo>({
    name: 'blog-page',
  });
