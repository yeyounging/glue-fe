'use client';

import { useRef, useCallback, useEffect } from 'react';

export type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
) => void;

export default function useIntersect(
  onIntersect: IntersectHandler,
  options?: IntersectionObserverInit,
) {
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry, observer);
        }
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    // eslint-disable-next-line
    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
}
