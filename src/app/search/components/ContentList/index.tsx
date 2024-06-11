import Story from '@/components/Story';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchContext } from '../SearchFetcher/SearchContext';

export default function ContentList() {
  const { postSearchItem } = useSearchContext();

  return (
    <div>
      <div className="flex flex-col gap-30">
        {postSearchItem.postSearchList.map(
          ({ blogId, title, postId, preview }) => (
            <Link
              href={`/blog/${blogId}/post/${postId}`}
              key={postId}
              className="flex flex-row gap-10 cursor-pointer"
            >
              <div className="absolute w-150 h-150">
                <Image
                  src="/tempImage/4.jpg"
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
          ),
        )}
      </div>
    </div>
  );
}
