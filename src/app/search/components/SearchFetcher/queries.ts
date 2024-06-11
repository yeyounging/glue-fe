import { useInfiniteQuery } from '@tanstack/react-query';
import { getSearchResult } from './api';

export const useSearchResult = (keyword: string, size: number) => {
  const { data, isLoading, ...rest } = useInfiniteQuery({
    queryKey: ['search-result', keyword],
    queryFn: ({ pageParam }) => getSearchResult(pageParam, keyword, size),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length;
      return lastPage.result.postSearchItem.hasNext ? nextPage : undefined;
    },
    refetchOnMount: false,
  });
  return { data, isLoading, ...rest };
};
