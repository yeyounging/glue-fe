import { http } from '@/api';

export interface RecommendationResponse {
  id: number;
  profile: string;
  title: string;
  description: string;
}

export const getRecommendation = () =>
  http.get<RecommendationResponse[]>({ url: '/blogs/recommendations' });
