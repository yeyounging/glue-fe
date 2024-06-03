'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Copy, Input } from '@/components/Common';
import { formatDate } from '@/utils';
import { usePortal } from '@/hooks';
import { usePostDetailContext } from '../PostDetailFetcher/PostDetailContext';
import useFollow from './hooks';
import { useDeletePosting } from './api/quries';

export default function PostDetailHeader({ postId }: { postId: string }) {
  const {
    postDetail: { title, createdAt, memberId },
    loginMemberId,
  } = usePostDetailContext();
  const { follow, handleFollow } = useFollow(Number(postId));
  const name = '김성민';
  const port = usePortal({ id: 'edit-container' });
  const { mutate } = useDeletePosting();

  const handleDeletePosting = () => {
    // TODO: 한번 더 확인하는 alert 필요
    mutate(Number(postId));
  };

  return (
    <>
      {loginMemberId === memberId &&
        port?.(
          <div className="flex gap-10">
            <Link
              href={`/edit/${postId}`}
              className="w-60 h-30 rounded-6 bg-primary text-[14px] text-[white] flex items-center gap-10 justify-center"
            >
              수정
            </Link>

            <Button
              className="w-60 h-30 rounded-6 bg-[#DE4939] text-[14px] text-[white] flex items-center gap-10 justify-center"
              onClick={handleDeletePosting}
            >
              삭제
            </Button>
          </div>,
        )}

      <header className="w-[530px] px-5 mb-70 mx-auto">
        <Input
          className="outline-none placeholder:text-[#999] text-36"
          placeholder="제목을 입력해주세요."
          defaultValue={title ?? '제목없음'}
          disabled
        />

        <div className="flex items-center justify-between px-5 border-b-1 border-[#D3D2D1] py-10">
          <div className="flex items-center gap-13">
            {/* TODO: Image fedch */}
            <div className="w-30 h-30 rounded-full bg-primary" />

            <p>{name}</p>
            <p className="text-[#BABABA]">{formatDate(createdAt)}</p>
          </div>

          <div className="flex gap-10 items-center">
            <Copy />

            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                className="px-18 py-6 rounded-8 bg-[#E3E3E3]"
                onClick={handleFollow}
              >
                {follow ? '팔로잉' : '팔로우'}
              </Button>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
}
