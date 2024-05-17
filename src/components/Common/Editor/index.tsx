'use client';

import { BlockNoteView } from '@blocknote/react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
import { PartialBlock } from '@blocknote/core';
import useEditor from './hooks';

interface EditorProps {
  className?: string;
  editable?: boolean;
  initialData?: PartialBlock[];
}

export default function Editor({
  className,
  initialData,
  editable = true,
}: EditorProps) {
  const { editor, saveToStorage } = useEditor({
    initialData,
  });

  if (!editor) {
    return null;
  }
  return (
    <BlockNoteView
      editor={editor}
      onChange={() => saveToStorage(editor.document)}
      className={className}
      theme="light"
      editable={editable}
    />
  );
}
