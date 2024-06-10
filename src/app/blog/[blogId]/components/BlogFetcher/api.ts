import { http } from '@/api';
import { BlogPageInfo } from './types';

export const getBlogPageInfo = (blogId: number) =>
  http.get<BlogPageInfo>({
    url: `/blogs/${blogId}`,
  });
