'use client';

import {
  ReactNode,
  createContext,
  useContext as ReactUseContext,
  useMemo,
} from 'react';

interface ContextOptions<ContextType> {
  name: string;
  errorMessage?: string;
  defaultContextValue?: ContextType;
}

type ProviderProps<ContextValuesType> = ContextValuesType & {
  children: ReactNode;
};

export default function generateContext<ContextType>(
  options: ContextOptions<ContextType>,
) {
  const {
    name,
    errorMessage = `useContext: ${name}Context가 존재하지 않습니다. Provider를 설정해주세요.`,
    defaultContextValue,
  } = options;
  const Context = createContext<ContextType | null>(
    defaultContextValue ?? null,
  );

  function useContext() {
    const context = ReactUseContext(Context);

    if (context !== null) {
      return context;
    }
    if (defaultContextValue !== null) {
      return defaultContextValue;
    }

    const error = new Error(errorMessage);
    error.name = `${name} ContextError`;
    Error.captureStackTrace(error, useContext);
    throw error;
  }

  function Provider({
    children,
    ...providerValues
  }: ProviderProps<ContextType>) {
    const value = useMemo(
      () => (Object.keys(providerValues).length > 0 ? providerValues : null),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [...Object.entries(providerValues).flat()],
    ) as ContextType;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  Context.displayName = name;
  Provider.displayName = name;

  return [Provider, useContext] as const;
}
