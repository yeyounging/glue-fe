'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePostLogin } from './api/queries';

export default function Page({
  searchParams: { code },
}: {
  searchParams: { code: string };
}) {
  const { push } = useRouter();
  const { mutate } = usePostLogin(code);

  useEffect(() => {
    const login = () => {
      try {
        mutate();

        push('/');
      } catch (err) {
        // TODO: error 세분화
        push('/');
      }
    };

    login();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);
}
