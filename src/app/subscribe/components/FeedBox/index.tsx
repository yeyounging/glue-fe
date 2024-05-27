import Story from '@/components/Story';
import Image from 'next/image';
import ProfileCard from '../ProfileCard';

interface FeedBoxProps {
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
  blogItem,
}: FeedBoxProps) {
  // FIXME: fallback이미지 수정
  const fallbackImage = '/images/bg-temp.jpeg';
  return (
    <div className="flex flex-col w-300 p-20 border items-center border-[#b4b3b3] rounded-5 shadow cursor-pointer">
      <div className="flex items-start justify-start w-full">
        <ProfileCard
          name={blogItem.nickname}
          title={blogItem.title}
          profile={blogItem.profile}
        />
      </div>
      <div className="relative w-250 h-170 p-30 mt-10 border border-[#bcbcbc] rounded-4">
        <Image
          src={photo || fallbackImage}
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-5 pt-3">
        <Story title={title} content={preview} />
      </div>
    </div>
  );
}
