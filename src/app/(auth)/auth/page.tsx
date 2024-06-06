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
        // eslint-disable-next-line
      } catch (err: any) {
        // eslint-disable-next-line
        console.error(err.message);
      } finally {
        push('/');
      }
    };

    login();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);
}
