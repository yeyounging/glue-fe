import { ReactNode, useCallback, useMemo } from 'react';
import { useIntersect } from '@/hooks';
import { SearchResultProvider } from './SearchContext';
import { useSearchResult } from './queries';
import { SearchResponse } from './types';

interface SearchResultFetcherProps {
  children: ReactNode;
  size: number;
  keyword: string;
}

export function SearchResultFetcher({
  children,
  size,
  keyword,
}: SearchResultFetcherProps) {
  const { data, isLoading, fetchNextPage, hasNextPage } = useSearchResult(
    keyword,
    size,
  );

  const handleIntersect = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && hasNextPage && !isLoading) {
        fetchNextPage();
      }
    },
    [isLoading, hasNextPage, fetchNextPage],
  );

  const endOfListRef = useIntersect(handleIntersect);
  const pages = data?.pages || [];
  const mergedPostSearchItem = pages.reduce(
    (acc, { result }) => {
      acc.postSearchList.push(...result.postSearchItem.postSearchList);
      acc.listSize += result.postSearchItem.listSize;
      acc.totalPage = result.postSearchItem.totalPage;
      acc.totalElements = result.postSearchItem.totalElements;
      acc.hasNext = result.postSearchItem.hasNext;
      return acc;
    },
    {
      postSearchList: [] as SearchResponse['postSearchItem']['postSearchList'],
      listSize: 0,
      totalPage: 0,
      totalElements: 0,
      isFirst: true,
      isLast: false,
      hasNext: false,
    },
  );

  const mergedBlogInfoItem = pages.reduce(
    (acc, { result }) => {
      acc.blogInfoList.push(...result.blogInfoItem.blogInfoList);
      acc.listSize += result.blogInfoItem.listSize;
      acc.totalPage = result.blogInfoItem.totalPage;
      acc.totalElements = result.blogInfoItem.totalElements;
      acc.hasNext = result.blogInfoItem.hasNext;
      return acc;
    },
    {
      blogInfoList: [] as SearchResponse['blogInfoItem']['blogInfoList'],
      listSize: 0,
      totalPage: 0,
      totalElements: 0,
      isFirst: true,
      isLast: false,
      hasNext: false,
    },
  );

  const mergedData = useMemo(() => {
    return {
      postSearchItem: mergedPostSearchItem,
      blogInfoItem: mergedBlogInfoItem,
    };
  }, [mergedPostSearchItem, mergedBlogInfoItem]);

  return (
    <SearchResultProvider {...mergedData}>
      {children}
      <div ref={endOfListRef} />
    </SearchResultProvider>
  );
}
