'use client';

import { usePortal } from '@/hooks';
import { NavigationIcons } from '@/components/Common';
import Card from '@/components/MatchCards/Card';
import Image from 'next/image';
import Link from 'next/link';

// FIXME: 더미 데이터 삭제
const dummyMatches = [
  {
    id: 0,
    name: '블로거 이름',
    description: '좋은 블로거 설명',
    matchRate: 86,
    imageSrc: '/images/1.png',
  },
  {
    id: 1,
    name: '블로거 이름',
    description: '좋은 블로거 설명',
    matchRate: 95,
    imageSrc: '/images/1.png',
  },
  {
    id: 2,
    name: '블로거 이름',
    description: '좋은 블로거 설명',
    matchRate: 93,
    imageSrc: '/images/1.png',
  },
  {
    id: 3,
    name: '블로거 이름',
    description: '좋은 블로거 설명',
    matchRate: 84,
    imageSrc: '/images/1.png',
  },
] as const;

export default function Page() {
  const port = usePortal({ id: 'match-portal-container' });

  return (
    <section className="w-full relative">
      {port?.(
        <div className="flex gap-20">
          <NavigationIcons />
        </div>,
      )}

      <section className="absolute-center w-[550px] top-50 flex flex-col gap-20">
        <h1 className="font-luckiest text-60 text-center leading-[1.1]">
          <div className="text-[#FF5BB4]">Catch</div>
          <div>Your Match</div>
        </h1>

        <div className="w-full h-[550px] bg-[#FF5BB4] rounded-20 grid grid-cols-2 grid-rows-2 justify-items-center items-center px-70 py-20">
          {dummyMatches.map(
            ({ id, name, description, matchRate, imageSrc }) => (
              <Link key={id} href={`/blog/${id}`}>
                <Card width="w-190" height="h-247">
                  <Card.Image>
                    <Image
                      src={imageSrc}
                      fill
                      objectFit="contain"
                      alt={`${name} image`}
                      className="rounded-12"
                    />
                  </Card.Image>

                  <Card.Title>{name}</Card.Title>

                  <Card.Description>{description}</Card.Description>

                  <Card.Footer className="text-[#FF5BB4]">
                    {matchRate}%
                  </Card.Footer>
                </Card>
              </Link>
            ),
          )}
        </div>
      </section>
    </section>
  );
}
