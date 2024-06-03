'use client';

import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/MatchCards/Card';
import { useRecommendationContext } from './components/RecommendationFetcher/RecommendationContext';

export default function Page() {
  const { recommendations } = useRecommendationContext();

  return (
    <section className="w-full relative">
      <section className="absolute-center w-[550px] top-50 flex flex-col gap-20">
        <h1 className="font-luckiest text-60 text-center leading-[1.1]">
          <div className="text-[#FF5BB4]">Catch</div>
          <div>Your Match</div>
        </h1>

        <div className="w-full h-[550px] bg-[#FF5BB4] rounded-20 grid grid-cols-2 grid-rows-2 justify-items-center items-center px-70 py-20">
          {recommendations.map(({ blogId, profile, title, description }) => (
            <Link key={blogId} href={`/blog/${blogId}`}>
              <Card width="w-190" height="h-247">
                <Card.Image>
                  <Image
                    src={profile}
                    fill
                    objectFit="contain"
                    alt={`${title} image`}
                    className="rounded-12"
                  />
                </Card.Image>

                <Card.Title>{title}</Card.Title>

                <Card.Description>{description}</Card.Description>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
