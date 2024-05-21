import { http } from '@/api';

export const postLike = (postId: number) =>
  http.post({ url: `/posts/likes/${postId}` });
