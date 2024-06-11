'use client';

import { useState } from 'react';
import { MyPageResponse } from '../types';
import { MyPageProvider } from './index';

export function MyPageProviderWrapper({
  children,
  initialData,
  blogId,
}: {
  children: React.ReactNode;
  initialData: MyPageResponse;
  blogId: number;
}) {
  const [myPageData, setMyPageData] = useState<MyPageResponse>(initialData);

  const contextValue = {
    blogId,
    myPageData,
    setMyPageData,
  };

  return <MyPageProvider {...contextValue}>{children}</MyPageProvider>;
}
