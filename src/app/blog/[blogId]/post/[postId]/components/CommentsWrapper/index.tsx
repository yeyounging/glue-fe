'use client';

import { motion } from 'framer-motion';
import { Button, LikeIcon } from '@/components/Common';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import useLike from './hooks';
import CommentAdder from './CommentAdder';
import Comments from './Comments';
import CommentsFallback from './Comments/CommentFallback';

export default function CommentsWrapper({ postId }: { postId: string }) {
  const { handleLike, likeCount, like = 0 } = useLike(Number(postId));

  return (
    <div className="w-[530px] mt-10 mb-[30vh] mx-auto">
      <div className="flex justify-between items-center pb-13 border-b-1 border-[#E0E0E0]">
        <p className="flex items-center text-33 font-bold">댓글</p>

        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            className="flex gap-5 bg-transparent text-start"
            onClick={handleLike}
          >
            <LikeIcon color={like ? '#FF4545' : '#D9D9D9'} />

            <p className="w-20">{likeCount + Number(like)}</p>
          </Button>
        </motion.div>
      </div>

      <AsyncBoundaryWithQuery pendingFallback={<div>댓글 로딩중...</div>}>
        <CommentsFallback>
          <Comments postId={Number(postId)} />
        </CommentsFallback>
      </AsyncBoundaryWithQuery>

      <CommentAdder postId={Number(postId)} />
    </div>
  );
}
