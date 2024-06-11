'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Pagination } from '@/components/Common';
import { useChildComments } from '../../api/quries';

export default function ChildComments({ commentId }: { commentId: number }) {
  const [page, setPage] = useState<number>(1);

  const {
    data: {
      commentItemList: { commentItems, totalPage },
    },
  } = useChildComments(commentId, page);

  return (
    <>
      {commentItems.map(
        ({ commentId: cId, createdAt, blogTitle, content, blogProfile }) => (
          <div
            key={cId}
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

              <div className="text-14 text-[#A6A6A6] absolute top-22 right-10 flex flex-col gap-8" />
            </div>
            <div className="text-14">{content}</div>
          </div>
        ),
      )}

      {commentItems.length > 10 && (
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
