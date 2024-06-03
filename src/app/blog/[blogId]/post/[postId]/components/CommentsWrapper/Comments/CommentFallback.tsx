'use client';

import { Button } from '@/components/Common';
import { useErrorBoundaryContext } from '@/react-utils/ErrorboundaryContext';
import { StrictPropsWithChildren } from '@/types';

export default function CommentsFallback({
  children,
}: StrictPropsWithChildren) {
  const { error, resetErrorBoundary } = useErrorBoundaryContext();

  if (error !== null) {
    return <Button onClick={() => resetErrorBoundary()}>다시 시도하기</Button>;
  }
  return children;
}
