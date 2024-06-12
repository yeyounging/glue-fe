'use client';

import { useMemo, useState } from 'react';
import { MyPageResponse } from '../types';
import { MyPageProvider } from './index';

export function MyPageProviderWrapper({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData: MyPageResponse;
}) {
  const [myPageData, setMyPageData] = useState<MyPageResponse>(initialData);

  const contextValue = useMemo(
    () => ({
      myPageData,
      setMyPageData,
    }),
    [myPageData, setMyPageData],
  );

  return <MyPageProvider {...contextValue}>{children}</MyPageProvider>;
}
