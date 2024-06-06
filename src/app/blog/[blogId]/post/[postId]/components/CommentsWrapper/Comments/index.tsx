'use client';

import { useState } from 'react';
import { Pagination } from '@/components/Common';
import { useComments } from '../api/quries';
import Comment from './Comment';

export default function Comments({ postId }: { postId: number }) {
  const [page, setPage] = useState<number>(1);

  const {
    data: {
      commentItemList: { totalPage, commentItems },
    },
  } = useComments(postId, page);

  return (
    <>
      {commentItems.map((commentItem) => (
        <Comment key={commentItem.commentId} {...{ ...commentItem, postId }} />
      ))}

      {commentItems.length > 0 && (
        <Pagination
          page={page}
          setPage={setPage}
          total={totalPage}
          className="flex justify-end py-9 gap-8"
        />
      )}
    </>
  );
}
