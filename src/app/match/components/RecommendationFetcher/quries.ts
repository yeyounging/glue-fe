import { useSuspenseQuery } from '@tanstack/react-query';
import { getRecommendation } from './api';

export const useRecommendation = () =>
  useSuspenseQuery({
    queryKey: ['recommndation'],
    queryFn: () => getRecommendation(),
    select: ({ result }) => result,
  });
