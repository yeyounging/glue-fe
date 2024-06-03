import { http } from '@/api';

export interface RecommendationResponse {
  blogId: number;
  profile: string;
  title: string;
  description: string;
}

export const getRecommendation = () =>
  http.post<RecommendationResponse[]>({
    url: '/blogs/recommendations',
  });
