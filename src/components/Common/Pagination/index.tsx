'use client';

import Button from '../Button';
import { PaginationLeft, PaginationRight } from '../Icons';
import { UsePaginationProp, usePagination } from './usePagination';
import { PaginationProvider, usePaginationContext } from './PaginationContext';

function PrevButton() {
  const { prevButton, getPrevButtonProps } = usePaginationContext();

  return (
    <Button {...getPrevButtonProps()}>
      {prevButton || <PaginationLeft />}
    </Button>
  );
}

function NextButton() {
  const { nextButton, getNextButtonProps } = usePaginationContext();

  return (
    <Button {...getNextButtonProps()}>
      {nextButton || <PaginationRight />}
    </Button>
  );
}

function PaginationContent() {
  const { displayedPages, getPageButtonProps } = usePaginationContext();
  const pages = displayedPages.length > 0 ? displayedPages : [1];

  return (
    <>
      <PrevButton />
      {pages.map((page) => (
        <button type="button" key={page} {...getPageButtonProps(page)}>
          {page}
        </button>
      ))}
      <NextButton />
    </>
  );
}

function Pagination({ ...props }: UsePaginationProp) {
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
