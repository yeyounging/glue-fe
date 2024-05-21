'use client';

import { motion } from 'framer-motion';
import { Button, Copy, Input } from '@/components/Common';

import { usePostDetailContext } from '../PostDetailFetcher/PostDetailContext';
import useFollow from './hooks';

export default function PostDetailHeader({ postId }: { postId: string }) {
  const { title, createdAt } = usePostDetailContext()!;
  const { follow, handleFollow } = useFollow(Number(postId));
  const name = '김성민';

  return (
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
          <p className="text-[#BABABA]">{createdAt}</p>
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
  );
}
