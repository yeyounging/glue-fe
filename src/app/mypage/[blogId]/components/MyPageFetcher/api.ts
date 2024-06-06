import { http } from '@/api';
import { MyPageResponse } from './types';

export const getMyPageInfo = (blogId: number) =>
  http.get<MyPageResponse>({
    url: `/blogs/mypage/${blogId}`,
    params: { blogId },
  });

export const patchMyPageInfo = (
  blogId: number,
  data: Partial<MyPageResponse>,
) =>
  http.patch<MyPageResponse>({
    url: `/blogs/mypage/${blogId}`,
    data,
  });
