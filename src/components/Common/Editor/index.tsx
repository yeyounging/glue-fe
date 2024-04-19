'use client';

import { BlockNoteView } from '@blocknote/react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
import useEditor from './hooks';

interface EditorProps {
  className?: string;
  editable?: boolean;
}

export default function Editor({ className, editable = true }: EditorProps) {
  const { editor, saveToStorage } = useEditor();

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
