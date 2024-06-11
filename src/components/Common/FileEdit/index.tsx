'use client';

import { useRef, ChangeEvent, useCallback } from 'react';
import Input from '../Input';
import Button from '../Button';

export default function FileEdit({
  onFileSelect,
}: {
  onFileSelect: (file: File) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEl = e.target as HTMLInputElement;

    if (inputEl.files?.[0]) {
      onFileSelect(inputEl.files[0]);
    }
  };

  const handleButtonClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  return (
    <div>
      <Input
        type="file"
        accept="image/*"
        id="profile"
        className="hidden"
        ref={inputRef}
        onChange={handleFileSelect}
      />
      <Button
        onClick={handleButtonClick}
        className="w-70 m-5 p-4 bg-primary/30 text-primary"
      >
        edit
      </Button>
    </div>
  );
}
