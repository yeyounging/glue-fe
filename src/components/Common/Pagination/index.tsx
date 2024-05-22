'use client';

import { ReactNode } from 'react';
import { UsePaginationProp, usePagination } from './usePagination';
import Button from '../Button';
import { PaginationLeft, PaginationRight } from '../Icons';
import { PaginationProvider, usePaginationContext } from './PaginationContext';

function PrevButton() {
  const { getPrevButtonProps } = usePaginationContext()!;

  return (
    <Button {...getPrevButtonProps()}>
      <PaginationLeft />
    </Button>
  );
}

function NextButton() {
  const { getNextButtonProps } = usePaginationContext()!;

  return (
    <Button {...getNextButtonProps()}>
      <PaginationRight />
    </Button>
  );
}

function PaginationContent() {
  const { displayedPages, getPageButtonProps } = usePaginationContext()!;

  return (
    <>
      <PrevButton />
      {(displayedPages.length > 0 ? displayedPages : [1]).map((pageNumber) => (
        <button
          type="button"
          key={pageNumber}
          {...getPageButtonProps(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <NextButton />
    </>
  );
}

function Pagination({
  prevButton,
  nextButton,
  ...props
}: UsePaginationProp & {
  prevButton?: ReactNode;
  nextButton?: ReactNode;
}) {
  const { Component, getBaseProps, ...values } = usePagination({
    ...props,
  });

  return (
    <Component {...getBaseProps()}>
      <PaginationProvider {...values}>
        <PaginationContent />
      </PaginationProvider>
    </Component>
  );
}

export default Pagination;
