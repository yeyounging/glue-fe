'use client';

import { KeyboardEvent, useState, CompositionEvent, useCallback } from 'react';

export default function useHashtags({
  initialData = [],
}: {
  initialData?: string[];
}) {
  const [value, setValue] = useState<string>('');
  const [hashtags, setHashtags] = useState<string[]>(initialData);
  const [isComposing, setIsComposing] = useState<boolean>(false);

  const handleComposition = useCallback(
    (e: CompositionEvent<HTMLInputElement>) => {
      setIsComposing(e.type !== 'compositionend');
    },
    [],
  );

  const addHashtag = useCallback(() => {
    setHashtags((prevHashtags) => [...prevHashtags, value.trim()]);
    setValue('');
  }, [value]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !isComposing && value.trim() !== '') {
        e.preventDefault();
        addHashtag();
      }
    },
    [addHashtag, isComposing, value],
  );

  const handleDelete = useCallback((index: number) => {
    setHashtags((prevHashtags) => prevHashtags.filter((_, i) => i !== index));
  }, []);

  const getInputProps = useCallback(
    () => ({
      value,
      onValueChange: setValue,
      onKeyDown: handleKeyDown,
      onCompositionStart: handleComposition,
      onCompositionEnd: handleComposition,
      placeholder: '해시태그를 입력하세요.',
    }),
    [handleKeyDown, value, handleComposition],
  );

  return {
    getInputProps,
    handleDelete,
    hashtags,
  };
}
