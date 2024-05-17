'use client';

import generateContext from './generateContext';

export const [ErrorboundaryProvider, useErrorBoundaryContext] =
  generateContext<{ error: Error | null; resetErrorBoundary: () => void }>({
    name: 'global-error-boundary-context',
    defaultContextValue: { error: null, resetErrorBoundary: () => {} },
  });
