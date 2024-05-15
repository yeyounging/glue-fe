import { http } from '@/api';

export const getPostDetail = <PostDetailResponse>(id: number) =>
  http.get<PostDetailResponse>({ url: `/post/${id}` });
