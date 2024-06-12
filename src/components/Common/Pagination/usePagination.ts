'use client';

import {
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import { As } from '@/types';
import { cn } from '@/utils';

export interface UsePaginationProp extends HTMLAttributes<HTMLDivElement> {
  total: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;

  as?: As;
  onNext?: () => void;
  onPrev?: () => void;
  prevButton?: ReactNode;
  nextButton?: ReactNode;
}

export function usePagination({ ...props }: UsePaginationProp) {
  const {
    page,
    setPage,
    total,
    onNext,
    onPrev,
    as,
    prevButton,
    nextButton,
    ...otherProps
  } = props;

  const pageSize = 10;
  const Component = as || 'div';

  const startPage = useMemo(() => {
    if (total <= 1) return 1;
    return Math.floor((page - 1) / pageSize) * pageSize + 1;
  }, [page, pageSize, total]);

  const endPage = useMemo(() => {
    if (total <= 1) return 1;
    return Math.min(startPage + pageSize - 1, total);
  }, [total, pageSize, startPage]);

  const displayedPages = useMemo(() => {
    if (total <= 1) return [1];
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  }, [startPage, endPage, total]);

  const getBaseProps = useCallback(
    () => ({
      className: cn('border-1', otherProps.className),
      ...otherProps,
    }),
    [otherProps],
  );

  const getPrevButtonProps = useCallback(
    () => ({
      onClick: () => {
        if (page > 1) {
          setPage((prev) => prev - 1);
          onPrev?.();
        }
      },
      disabled: page <= 1,
      className: cn(
        'w-25 h-25 bg-[white] border-1 border-[#DFE3E8]',
        page <= 1 && 'bg-[#DFE3E8]',
      ),
    }),
    [setPage, page, onPrev],
  );

  const getNextButtonProps = useCallback(
    () => ({
      onClick: () => {
        if (page < total) {
          setPage((prev) => prev + 1);
          onNext?.();
        }
      },
      disabled: page >= total,
      className: cn(
        'w-25 h-25 bg-[white] border-1 border-[#DFE3E8]',
        page >= total && 'bg-[#DFE3E8]',
      ),
    }),
    [setPage, page, total, onNext],
  );

  const getPageButtonProps = useCallback(
    (currentPage: number) => ({
      onClick: () => setPage(() => currentPage),
      className: cn(
        'w-25 h-25 rounded-4 border-1 border-[#DFE3E8] text-14',
        page === currentPage && 'border-[#F08D53] text-[#F08D53]',
      ),
    }),
    [page, setPage],
  );

  return {
    Component,
    page,
    setPage,
    displayedPages,
    prevButton,
    nextButton,
    getBaseProps,
    getPrevButtonProps,
    getNextButtonProps,
    getPageButtonProps,
  };
}

export type UsePaginationReturn = ReturnType<typeof usePagination>;
