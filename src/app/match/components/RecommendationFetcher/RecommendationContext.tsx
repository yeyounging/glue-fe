'use client';

import { generateContext } from '@/react-utils';
import { RecommendationResponse } from './api';

export const [RecommendationProvider, useRecommendationContext] =
  generateContext<RecommendationResponse[]>({
    name: 'matching-context',
  });
