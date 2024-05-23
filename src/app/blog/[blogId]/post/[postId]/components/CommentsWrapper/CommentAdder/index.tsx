'use client';

import { useState } from 'react';
import { Button, TextArea } from '@/components/Common';
import { cn } from '@/utils';
import { usePostComment } from '../api/quries';

export default function CommentAdder({
  postId,
  parentId,
  childComment = false,
}: {
  postId: number;
  parentId?: number;
  childComment?: boolean;
}) {
  const [comment, setComment] = useState<string>('');
  const { mutate } = usePostComment(postId);

  const handlePostComment = () => {
    mutate({ content: comment, parentId: Number(parentId) });
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-10 py-10 px-10 border-[#E0E0E0]',
        !childComment && 'border-b-1',
        childComment && 'pr-0',
      )}
    >
      <div className="flex gap-8 items-center">
        {/* TODO: Image fetch */}
        <div className="bg-[black] w-40 h-40 rounded-full" />

        <div className="text-14">
          <div className="font-bold">김성민</div>
          <div className="text-[#8D8D8D]">2024.04.11</div>
        </div>
      </div>

      <form onSubmit={handlePostComment} className="text-14">
        <TextArea
          value={comment}
          onValueChange={setComment}
          placeholder="댓글을 입력해주세요."
          className="placeholder-[#BDBDBD] min-h-90 border-1 border-[#E0E0E0] rounded-6 p-10"
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            className="px-10 py-2 text-[black] bg-white border-[#E0E0E0] border-1"
          >
            등록
          </Button>
        </div>
      </form>
    </div>
  );
}
