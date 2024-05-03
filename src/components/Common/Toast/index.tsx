'use client';

/* eslint-disable */

import { ReactNode, useCallback, useMemo, useState } from 'react';
import toast, { ToastOptions, Toaster, ValueOrFunction } from 'react-hot-toast';
import {
  ToastProvider as ToastContainer,
  StrictToastRenderable,
} from './ToastProvider';

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toastId, setToastId] = useState<string>('');

  const handleLoading = useCallback(
    (
      toastComponent: StrictToastRenderable,
      options?: Omit<ToastOptions, 'duration'>,
    ) => {
      setToastId(
        toast.loading(toastComponent, {
          position: 'bottom-center',
          ...options,
        }),
      );
    },
    [],
  );

  const handleError = useCallback(
    (toastComponent: StrictToastRenderable, options?: ToastOptions) => {
      toast.error(toastComponent, { position: 'bottom-center', ...options });
    },
    [],
  );

  const handleSuccess = useCallback(
    (toastComponent: StrictToastRenderable, options?: ToastOptions) => {
      toast.success(toastComponent, { position: 'bottom-center', ...options });
    },
    [],
  );
  const handlePromise = useCallback(
    (
      promise: Promise<any>,
      toastComponent: {
        loading: StrictToastRenderable;
        success: ValueOrFunction<StrictToastRenderable, any>;
        error: ValueOrFunction<StrictToastRenderable, any>;
      },
      options?: ToastOptions,
    ) => {
      toast.promise(promise, toastComponent, {
        position: 'bottom-center',
        ...options,
      });
    },
    [],
  );

  const value = useMemo(
    () => ({
      toastId,
      setToastId,
      handleLoading,
      handleError,
      handleSuccess,
      handlePromise,
    }),
    [
      toastId,
      setToastId,
      handleLoading,
      handleError,
      handleSuccess,
      handlePromise,
    ],
  );

  return (
    <ToastContainer {...value}>
      {children}
      <Toaster containerStyle={{ bottom: '40px' }} />
    </ToastContainer>
  );
}
