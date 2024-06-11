import { generateContext } from '@/react-utils';
import { SearchResponse } from './types';

export const [SearchResultProvider, useSearchContext] =
  generateContext<SearchResponse>({
    name: 'search-result-context',
  });
