import {
  ReactNode,
  ElementType,
  RefObject,
  MutableRefObject,
  Ref,
} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As<Props = any> = ElementType<Props>;
export type ReactRef<T> = RefObject<T> | MutableRefObject<T> | Ref<T>;

export type StrictPropsWithChildren<P = unknown> = P & { children: ReactNode };
