'use client';

import { generateContext } from '@/react-utils';
import { UseDropdownReturn } from './useDropdown';

export const [DropdownProvider, useDropdownContext] = generateContext<
  Omit<UseDropdownReturn, 'Component' | 'getBaseProps'>
>({ name: 'dropdown' });
