import { http } from '@/api';

export const postFollow = (postId: number) =>
  http.post({ url: `/blogs/subscriptions/${postId}` });

export const deletePosting = (postId: number) =>
  http.delete({ url: `/posts/${postId}` });
