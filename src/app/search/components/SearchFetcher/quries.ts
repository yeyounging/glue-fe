'use clinet';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getSearchResult } from './api';

export const useSearchResult = (page: number, size: number, keyword: string) =>
  useSuspenseQuery({
    queryKey: ['search-result', keyword],
    queryFn: () => getSearchResult(page, keyword, size),
    refetchOnMount: false,
    select: (data) => data.result,
  });
