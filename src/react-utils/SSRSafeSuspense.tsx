'use client';

import { useIsSSR } from '@/hooks';
import { ComponentProps, Suspense } from 'react';

export default function SSRSafeSuspense(
  props: ComponentProps<typeof Suspense>,
) {
  const isSSR = useIsSSR();

  if (isSSR) {
    // eslint-disable-next-line react/destructuring-assignment
    return props.fallback;
  }
  return <Suspense {...props} />;
}
