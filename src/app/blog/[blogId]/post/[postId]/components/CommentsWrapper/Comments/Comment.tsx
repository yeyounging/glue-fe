'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/Common';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import CommentAdder from '../CommentAdder';
import { Comment as CommentProp } from '../api/types';
import ChildComments from './ChildComments/ChildComments';
import ChildCommentFallback from './ChildComments/ChildCommentsFallback';

export default function Comment(commentItem: CommentProp & { postId: number }) {
  const {
    commentId,
    createdAt,
    blogTitle,
    content,
    blogProfile,
    hasChildComment,
    postId,
  } = commentItem;
  const [showCommentAdder, setShowCommentAdder] = useState<boolean>(false);
  const [showChildComments, setShowChildComments] = useState<boolean>(false);

  return (
    <div
      key={commentId}
      className="relative flex flex-col gap-10 border-b-1 border-[#E0E0E0] py-10 px-10"
    >
      <div className="flex gap-8 items-center">
        {blogProfile ? (
          <Image
            loader={() => blogProfile}
            src={blogProfile}
            width={40}
            height={40}
            alt={blogTitle}
          />
        ) : (
          <div className="bg-[black] w-40 h-40 rounded-full" />
        )}

        <div className="text-14">
          <div className="font-bold">{blogTitle}</div>
          <div className="text-[#8D8D8D]">{createdAt}</div>
        </div>

        <div className="text-14 text-[#A6A6A6] absolute top-22 right-10 flex flex-col gap-8">
          <Button
            className="text-14 text-[#A6A6A6] bg-transparent"
            onClick={() => setShowCommentAdder((prev) => !prev)}
          >
            답글
          </Button>

          {hasChildComment && (
            <Button
              className="text-14 text-[#A6A6A6] bg-transparent"
              onClick={() => setShowChildComments((prev) => !prev)}
            >
              {showChildComments ? '닫기' : '더보기'}
            </Button>
          )}
        </div>
      </div>
      <div className="text-14">{content}</div>

      <AsyncBoundaryWithQuery pendingFallback={<div>대댓글 로딩중</div>}>
        <ChildCommentFallback>
          {showChildComments && <ChildComments commentId={commentId} />}
        </ChildCommentFallback>
      </AsyncBoundaryWithQuery>

      {showCommentAdder && (
        <div className="pl-30">
          <CommentAdder postId={postId} childComment parentId={commentId} />
        </div>
      )}
    </div>
  );
}
