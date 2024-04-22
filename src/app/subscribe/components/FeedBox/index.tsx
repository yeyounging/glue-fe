import Story from '@/components/Story';
import Image from 'next/image';
import ProfileCard from '../ProfileCard';

interface FeedBoxProps {
  id: number;
  title: string;
  content: string;
  src: string;
}

export default function FeedBox({ id, title, content, src }: FeedBoxProps) {
  return (
    <div className="w-300 p-20 border border-[#b4b3b3] rounded-5">
      <ProfileCard id={id} />
      <div className="relative w-250 h-170 p-30 mt-10 border border-[#bcbcbc] rounded-4">
        <Image src={src} alt="image" layout="fill" objectFit="cover" />
      </div>
      <div className="px-5 pt-3">
        <Story title={title} content={content} />
      </div>
    </div>
  );
}
