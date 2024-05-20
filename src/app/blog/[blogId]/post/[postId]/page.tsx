'use client';

import dynamic from 'next/dynamic';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
import {
  Button,
  Copy,
  Input,
  LikeIcon,
  NavigationIcons,
} from '@/components/Common';
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

      <section className="w-[620px]">
        <Input
          className="outline-none placeholder:text-[#999] text-36"
          wrapperClassName="px-45"
          placeholder="제목을 입력해주세요."
          defaultValue={title ?? '제목없음'}
          disabled
        />

        <div className="w-[530px] flex items-center justify-between border-b-1 border-[#D3D2D1] px-5 py-10 mb-70 mx-auto">
          <div className="flex items-center gap-13">
            <div className="w-30 h-30 rounded-full bg-primary" />
            <p>{name}</p>
            <p className="text-[#BABABA]">{createdAt}</p>
          </div>

          <div className="flex gap-10 items-center">
            <Copy />

            {/* TODO: follow */}
            <Button className="px-18 py-6 rounded-8 bg-[#E3E3E3]">
              팔로우
            </Button>
          </div>
        </div>

        <Editor editable={false} initialData={content} />

        {/* TODO: 댓글 Refactor */}
        <div className="w-[530px] mt-130 mb-[30vh] mx-auto">
          <div className="flex justify-between items-center">
            <p className="flex items-center text-33 font-bold">댓글</p>

            <div className="flex gap-5">
              <LikeIcon color={likeCount > 0 ? '#FF4545' : '#D9D9D9'} />{' '}
              {likeCount}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
