'use client';

import { generateContext } from '@/react-utils';

interface UserContextProps {
  loginId: number | null;
  setLoginId: (id: number | null) => void;
}

export const [UserProvider, useUserContext] = generateContext<UserContextProps>(
  {
    name: 'user-info',
  },
);
