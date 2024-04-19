'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useIsSSR from './useIsSSR';

export default function usePortal({ id }: { id: string }) {
  const isSSR = useIsSSR();
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (isSSR) {
      setContainer(document.getElementById(id));
    }
  }, [id, isSSR]);

  if (isSSR) {
    return null;
  }
  if (!container) {
    return null;
  }

  const portal = (compoenent: JSX.Element) =>
    createPortal(compoenent, container);
  return portal;
}
