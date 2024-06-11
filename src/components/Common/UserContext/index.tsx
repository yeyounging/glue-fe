'use client';

import { generateContext } from '@/react-utils';

interface UserContextProps {
  loginId: number;
  setLoginId: (id: number) => void;
}

export const [UserProvider, useUserContext] = generateContext<UserContextProps>(
  {
    name: 'user-info',
  },
);
