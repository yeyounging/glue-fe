import { http } from '@/api';
import { SearchResponse } from './types';

export const getSearchResult = (page: number, keyword: string, size: number) =>
  http.get<SearchResponse>({
    url: '/posts/search',
    params: { keyword, page, size },
  });
