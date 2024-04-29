'use client';

import { Button, Input } from '@/components/Common';
import { useRef, Dispatch, SetStateAction, ChangeEvent } from 'react';

interface ProfileEditProps {
  setFile: Dispatch<SetStateAction<File | null>>;
}

export default function FileEdit({ setFile }: ProfileEditProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEl = e.target as HTMLInputElement;

    if (inputEl.files?.[0]) {
      setFile(inputEl.files[0]);
    }
  };

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
        onClick={() => inputRef.current?.click()}
        className="w-70 m-5 p-4 bg-primary/30 text-primary"
      >
        edit
      </Button>
    </div>
  );
}
