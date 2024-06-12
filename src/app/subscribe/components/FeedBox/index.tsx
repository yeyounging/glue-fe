import Story from '@/components/Story';
import Image from 'next/image';
import Link from 'next/link';
import ProfileCard from '../ProfileCard';

interface FeedBoxProps {
  postId: number;
  title: string;
  preview?: string;
  photo?: string;
  blogItem: {
    blogId: number;
    nickname: string;
    title?: string;
    profile?: string;
  };
}

export default function FeedBox({
  title,
  preview,
  photo,
  postId,
  blogItem,
}: FeedBoxProps) {
  const fallbackImage = '/images/bg-temp.jpeg';
  return (
    <div className="flex flex-col w-300 p-20 border items-center border-[#b4b3b3] rounded-5 shadow cursor-pointer">
      <div className="flex items-start justify-start w-full">
        <ProfileCard
          blogId={blogItem.blogId}
          name={blogItem.nickname}
          title={blogItem.title}
          profile={blogItem.profile}
        />
      </div>
      <Link href={`/blog/${blogItem.blogId}/post/${postId}`}>
        <div className="relative w-250 h-170 p-30 mt-10 border border-[#bcbcbc] rounded-4">
          <Image
            loader={() => photo || fallbackImage}
            src={photo || fallbackImage}
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-5 pt-3">
          <Story title={title} content={preview} />
        </div>
      </Link>
    </div>
  );
}
