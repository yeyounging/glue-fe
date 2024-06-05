import { http } from '@/api';
import { PostDetailResponse } from '../types';

export const getPostDetail = (id: number) =>
  http.get<PostDetailResponse>({ url: `/posts/${id}` });
