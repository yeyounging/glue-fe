import { http } from '@/api';

export const postSubscibe = (blogId: number) =>
  http.post({ url: `/blogs/subscriptions${blogId}` });
