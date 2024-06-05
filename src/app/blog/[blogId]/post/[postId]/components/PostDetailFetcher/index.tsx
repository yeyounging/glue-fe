'use client';

import { StrictPropsWithChildren } from '@/types';
import { PostDetailProvider } from './PostDetailContext';
import { usePostDetail } from './api/quries';

export default function PostDetailFetcher({
  children,
  id,
}: StrictPropsWithChildren & { id: string }) {
  const { data } = usePostDetail(Number(id));

  return <PostDetailProvider {...data}>{children}</PostDetailProvider>;
}
