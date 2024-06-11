'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/Common';
import { useSlider } from './useSlider';

export default function Slider({ photos }: { photos: string[] }) {
  const temp = '/tempImage/6.jpg';
  const { currentIndex, nextSlide, prevSlide } = useSlider(photos.length);

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      <div
        className="flex transform transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((photo) => (
          <div key={photo} className="relative flex-none w-1/5 h-200">
            <div className="w-full h-full">
              <Image
                alt="photo"
                src={photo || temp}
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
