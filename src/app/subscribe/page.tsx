'use client';

import { useState } from 'react';
import { Button } from '@/components/Common';
import { cn } from '@/utils';
import { FeedBox, ProfileCard } from './components';
import { posts } from '../lib/dummyData';

export default function Page() {
  type ButtonOption = '내가구독' | '나를구독';
  const [selectedButton, setSelectedButton] =
    useState<ButtonOption>('내가구독');
  const handleButtonClick = (buttonName: ButtonOption) => {
    setSelectedButton(buttonName);
  };
  return (
    <section className="w-full flex flex-row py-50">
      <section className="fixed px-20">
        <div className="text-bold text-[17px] text-primary font-luckiest px-30 pt-100">
          SUBSCRIBTION
        </div>
        <div className="flex flex-row gap-5 justify-center pb-30">
          <Button
            className={cn(
              'border',
              selectedButton === '내가구독' && 'border-primary',
              'bg-white rounded-30 p-6 text-[12px] transition-all duration-100',
            )}
            onClick={() => handleButtonClick('내가구독')}
          >
            내가 구독하는
          </Button>
          <Button
            className={cn(
              'border',
              selectedButton === '나를구독' && 'border-primary',
              'bg-white rounded-30 p-6 text-[12px] transition-all duration-100',
            )}
            onClick={() => handleButtonClick('나를구독')}
          >
            나를 구독하는
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <ProfileCard id={1} />
          <ProfileCard id={2} />
          <ProfileCard id={3} />
          <ProfileCard id={4} />
          <ProfileCard id={5} />
        </div>
      </section>
      <p className="h-500 w-1 bg-primary mt-100 ml-220 fixed" />
      <section className="flex flex-col items-start ml-380">
        <div className="flex flex-col items-center">
          <div className="font-extrabold text-4xl">Others&apos; Stories</div>
          <p className="w-260 h-2 bg-primary mb-2" />
          <p className="w-270 h-2 bg-primary mb-2" />
        </div>
        <article className="grid grid-cols-3 gap-40 py-50">
          {posts.map(({ id, title, content, src }) => (
            <FeedBox
              id={id}
              key={id}
              title={title}
              content={content}
              src={src}
            />
          ))}
        </article>
      </section>
    </section>
  );
}
