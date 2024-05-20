import { getBackgroundImageById, getTitleById } from '@/app/lib/dummyData';
import Image from 'next/image';

export default function BlogCard({ id }: { id: number }) {
  const backgroundImageSrc = getBackgroundImageById(id);
  const title = getTitleById(id);

  return (
    <article className="flex flex-col items-center justify-start border border-[#979696]">
      {backgroundImageSrc && (
        <div className="relative w-250 h-130">
          <Image
            src={backgroundImageSrc}
            alt="bg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <p className="font-semibold p-4">{title}</p>
    </article>
  );
}
