import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Story from '@/components/Story';
import { Pagination } from '@/components/Common';
import { useBoardContext } from '../BlogFetcher/BlogContext';

export default function BoardContent({
  page,
  setPage,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  const { postItems, totalPage } = useBoardContext();

  return (
    <div className="px-100 py-20">
      <header className="flex flex-row items-center justify-between w-full pr-10">
        <div className="flex flex-col justify-center items-center">
          <div className="font-extrabold text-4xl">Stories</div>
          <p className="w-130 h-3 bg-primary mb-2" />
          <p className="w-140 h-3 bg-primary mb-2" />
        </div>
      </header>
      <div className="flex flex-col gap-30">
        {postItems.map(({ blogId: id, title, postId, preview, photoUrl }) => (
          <Link
            href={`/blog/${id}/post/${postId}`}
            key={postId}
            className="flex flex-row gap-10 cursor-pointer"
          >
            <div className="absolute w-150 h-150">
              <Image
                loader={() => photoUrl || '/tempImage/4.jpg'}
                src={photoUrl || '/tempImage/4.jpg'}
                alt={String(postId)}
                layout="fill"
                objectFit="cover"
                className="rounded-3"
              />
            </div>
            <div className="relative pl-170 py-1">
              <Story key={postId} title={title} content={preview} />
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        total={totalPage}
        className="flex justify-end py-9 gap-8"
      />
    </div>
  );
}
