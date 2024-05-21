import { http } from '@/api';

export const postFollow = (postId: number) =>
  http.post({ url: `/blogs/subscriptions/${postId}` });
