'use client';

import { useMemo, useState } from 'react';
import { UserProvider } from '.';

export default function UserProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loginId, setLoginId] = useState<number>(0);

  const contextValue = useMemo(
    () => ({
      loginId,
      setLoginId,
    }),
    [loginId, setLoginId],
  );

  return <UserProvider {...contextValue}>{children}</UserProvider>;
}
