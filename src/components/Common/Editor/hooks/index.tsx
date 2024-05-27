'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
import { safeSeesionStorage } from '@/utils';
import { EDITOR_KEY, LOADING } from '../constants';

interface EditorOptions {
  initialData?: PartialBlock[];
}

export default function useEditor(options?: EditorOptions) {
  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | typeof LOADING
  >(options?.initialData);

  const safeSessionStorage = useMemo(() => safeSeesionStorage, []);

  const uploadFile = useCallback(async (file: File) => {
    const body = new FormData();

    if (!file.type.startsWith('image')) {
      // FIXME: refactor modal alert
      // eslint-disable-next-line no-alert
      alert('이미지만 업로드할 수 있습니다.');
      return null;
    }

    body.append('file', file);

    // FIXME: refactor 데이터 페치
    const ret = await fetch('https://tmpfiles.org/api/v1/upload', {
      method: 'POST',
      body,
    });
    const result = (await ret.json()).data.url;
    return result;
  }, []);

  const editor = useMemo(() => {
    if (initialContent === LOADING) {
      return undefined;
    }
    return BlockNoteEditor.create({ initialContent, uploadFile });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialContent]);

  const saveToStorage = useCallback(
    async (jsonBlocks: Block[]) => {
      safeSessionStorage.set(EDITOR_KEY, JSON.stringify(jsonBlocks));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const loadFromStorage = useCallback(async () => {
    const storageString = safeSessionStorage.get(EDITOR_KEY);
    return storageString
      ? (JSON.parse(storageString) as PartialBlock[])
      : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!initialContent) {
      loadFromStorage().then((content) => {
        setInitialContent(content);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { editor, saveToStorage };
}
