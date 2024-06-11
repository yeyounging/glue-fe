'use client';

import Image from 'next/image';
import { useBlogPageContext } from '../BlogFetcher/BlogContext';

export default function BlogBackground() {
  const defaultImage = '/images/bg-temp.jpeg';
  const {
    blogInfo: { description, background },
  } = useBlogPageContext();

  const imageLoader = ({ src }: { src: string }) => {
    return src;
  };

  return (
    <div className="relative w-full h-screen">
      <div className="relative w-full h-full group">
        <Image
          loader={imageLoader}
          src={background || defaultImage}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-pretendard font-bold">
          {description}
        </div>
      </div>
    </div>
  );
}
