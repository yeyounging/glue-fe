'use client';

import { useSyncExternalStore } from 'react';

function getSnapshot() {
  return false;
}

function getServerSnapshot() {
  return true;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function subscribe(onStoreChange: () => void): () => void {
  return () => {};
}

export default function useIsSSR() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
