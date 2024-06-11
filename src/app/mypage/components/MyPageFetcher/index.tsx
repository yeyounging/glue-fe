'use client';

import { StrictPropsWithChildren } from '@/types';
import { useMyPageInfo } from './queries';
import { MyPageProviderWrapper } from './MyPageContext/MyPageProviderWrapper';

export default function MyPageFetcher({
  children,
  blogId,
}: StrictPropsWithChildren & { blogId: number }) {
  const { data } = useMyPageInfo(blogId);

  return (
    <MyPageProviderWrapper initialData={data} blogId={blogId}>
      {children}
    </MyPageProviderWrapper>
  );
}
