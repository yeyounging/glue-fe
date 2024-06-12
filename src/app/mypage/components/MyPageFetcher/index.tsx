'use client';

import { StrictPropsWithChildren } from '@/types';
import { useMyPageInfo } from './queries';
import { MyPageProviderWrapper } from './MyPageContext/MyPageProviderWrapper';

export default function MyPageFetcher({ children }: StrictPropsWithChildren) {
  const { data } = useMyPageInfo();

  return (
    <MyPageProviderWrapper initialData={data}>{children}</MyPageProviderWrapper>
  );
}
