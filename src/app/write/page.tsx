'use client';

import { useState } from 'react';
import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
import { Button, Input, NavigationIcons } from '@/components/Common';
import { usePortal } from '@/hooks';

export default function Page() {
  const port = usePortal({ id: 'write-portal-container' });
  const [title, setTitle] = useState<string>('');
  const editor = useCreateBlockNote();

  return (
    <main className="relative flex justify-center">
      {port?.(
        <div className="flex gap-20">
          <NavigationIcons />

          <div className="flex gap-12 font-pretendard font-medium">
            <Button className="bg-[#E3E3E3] w-60 h-30">저장</Button>
            <Button className="bg-primary text-[white] w-60 h-30">발행</Button>
          </div>
        </div>,
      )}

      <aside className="text-26 absolute top-85 left-30 font-luckiest text-primary text-shadow-primary transition-all duration-200">
        stickers
      </aside>

      <section className="w-[620px]">
        <Input
          wrapperClassName="px-45"
          className="outline-none placeholder:text-[#999] text-36"
          placeholder="제목을 입력해주세요."
          value={title}
          onValueChange={setTitle}
        />

        <div className="h-1 bg-[#D8D8D8] mx-45" />

        <BlockNoteView
          editor={editor}
          className="w-full min-h-[500px] rounded-[4px] py-10 mt-42"
          theme="light"
        />
      </section>
    </main>
  );
}
