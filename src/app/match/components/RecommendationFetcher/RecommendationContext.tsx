'use client';

import { generateContext } from '@/react-utils';
import { RecommendationResponse } from './api';

export const [RecommendationProvider, useRecommendationContext] =
  generateContext<{ recommendations: RecommendationResponse[] }>({
    name: 'matching-context',
  });
