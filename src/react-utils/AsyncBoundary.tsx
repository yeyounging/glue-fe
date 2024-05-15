'use client';

import { ComponentProps, ComponentRef, Suspense, forwardRef } from 'react';
import { StrictPropsWithChildren } from '@/types';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from './ErrorBoundary';
import SSRSafeSuspense from './SSRSafeSuspense';

type ErrorBoundaryProps = Omit<
  ComponentProps<typeof ErrorBoundary>,
  'renderFallback'
>;
type SuspenseProps = Omit<ComponentProps<typeof Suspense>, 'fallback'>;

type AsyncBoundrayProps = StrictPropsWithChildren &
  ErrorBoundaryProps &
  SuspenseProps & {
    errorFallback?: ComponentProps<typeof ErrorBoundary>['renderFallback'];
    pendingFallback?: ComponentProps<typeof Suspense>['fallback'];
  };

export const AsyncBoundary = forwardRef<
  ComponentRef<typeof ErrorBoundary>,
  AsyncBoundrayProps
>(
  (
    { errorFallback, pendingFallback, children, ...errorBoundaryProps },
    ref,
  ) => {
    return (
      <ErrorBoundary
        ref={ref}
        renderFallback={errorFallback}
        {...errorBoundaryProps}
      >
        <SSRSafeSuspense fallback={pendingFallback}>{children}</SSRSafeSuspense>
      </ErrorBoundary>
    );
  },
);

AsyncBoundary.displayName = 'GLUE-AsyncBoundary';

export const AsyncBoundaryWithQuery = forwardRef<
  ComponentRef<typeof ErrorBoundary>,
  AsyncBoundrayProps
>((props, ref) => {
  const { children, ...otherProps } = props;
  const { reset } = useQueryErrorResetBoundary();

  return (
    <AsyncBoundary
      ref={ref}
      {...otherProps}
      onReset={() => {
        props?.onReset?.();
        reset();
      }}
    >
      {children}
    </AsyncBoundary>
  );
});

AsyncBoundaryWithQuery.displayName = 'GLUE-AsyncBoundaryWithQuery';
