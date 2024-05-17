'use client';

import dynamic from 'next/dynamic';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
import { Button, Copy, Input, NavigationIcons } from '@/components/Common';
import { usePortal } from '@/hooks';
import { usePostDetailContext } from './components/PostDetailFetcher/PostDetailContext';

const Editor = dynamic(() => import('@/components/Common/Editor'), {
  ssr: false,
});

export default function Page() {
  const { title, createdAt, content, likeCount } = usePostDetailContext()!;
  const port = usePortal({ id: 'post-detail' });

  // TODO: 유저 정보 파싱
  const name = '김성민';

  return (
    <section className="relative flex justify-center">
      {port?.(<NavigationIcons />)}

      <section className="w-[620px] px-45">
        <Input
          className="outline-none placeholder:text-[#999] text-36"
          placeholder="제목을 입력해주세요."
          defaultValue={title ?? '제목없음'}
          disabled
        />

        <div className="w-full flex items-center justify-between px-5">
          {/* TODO: 유저 fetch */}
          <div className="flex items-center gap-13">
            <div className="w-30 h-30 rounded-full bg-primary" />
            <p>{name}</p>
            <p className="text-[#BABABA]">{createdAt}</p>
          </div>

          <div className="flex gap-10 items-center">
            <Copy />
            <Button className="px-18 py-6 rounded-8 bg-[#E3E3E3]">
              팔로우
            </Button>
          </div>
        </div>

        <Editor editable={false} initialData={content} />

        <div>좋아요 {likeCount}</div>

        {/* TODO: 댓글 구현 */}
      </section>
    </section>
  );
}
