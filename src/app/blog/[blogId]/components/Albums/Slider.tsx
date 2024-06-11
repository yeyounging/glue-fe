'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/Common';
import { generateId } from '@/utils';
import { useSlider } from './useSlider';

export default function Slider({ photos }: { photos: string[] }) {
  const { currentIndex, nextSlide, prevSlide } = useSlider(photos.length);
  const photoCount = photos.length;
  const slideWidth = 100 / photoCount;

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      <div
        className="flex transform transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
      >
        {photos.map((photo) => (
          <div
            key={generateId()}
            className="relative flex-none"
            style={{ width: `${slideWidth}%`, height: '200px' }}
          >
            <div className="w-full h-full">
              <Image
                loader={() => photo}
                alt="photo"
                src={photo}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <Button
          className="p-2 bg-[#f1efef] rounded-full opacity-50 hover:opacity-90"
          onClick={prevSlide}
        >
          &lt; Prev
        </Button>
        <Button
          className="p-2 bg-[#f1efef] rounded-full opacity-50 hover:opacity-90"
          onClick={nextSlide}
        >
          Next &gt;
        </Button>
      </div>
    </div>
  );
}
