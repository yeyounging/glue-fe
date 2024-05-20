import { posts } from '@/app/lib/dummyData';
import Story from '@/components/Story';
import Image from 'next/image';

export default function ContentList() {
  return (
    <div className="flex flex-col gap-30">
      {posts.map(({ id, src, title, content }) => (
        <div key={id} className="flex flex-row gap-10">
          <div className="absolute w-150 h-150">
            <Image src={src} alt={String(id)} layout="fill" objectFit="cover" />
          </div>
          <div className="relative pl-170">
            <Story key={id} title={title} content={content} />
          </div>
        </div>
      ))}
    </div>
  );
}
