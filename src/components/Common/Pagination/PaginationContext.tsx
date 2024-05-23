'use client';

import { generateContext } from '@/react-utils';
import { UsePaginationReturn } from './usePagination';

export const [PaginationProvider, usePaginationContext] = generateContext<
  Omit<UsePaginationReturn, 'children' | 'Component' | 'getBaseProps'>
>({
  name: 'pagination-context',
});
