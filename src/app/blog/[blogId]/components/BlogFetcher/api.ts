import { http } from '@/api';
import { BlogPageInfo, BoardResponse } from './types';

export const getBlogPageInfo = (blogId: number) =>
  http.get<BlogPageInfo>({
    url: `/blogs/${blogId}`,
  });

export const getBoard = (blogId: number, page: number, size?: number) =>
  http.get<BoardResponse>({
    url: `/posts/blogs/stories/${blogId}`,
    params: { page, size },
  });
