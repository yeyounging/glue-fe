'use client';

import { useState } from 'react';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import { FollowPostFetcher } from '../SubscribeFetcher';
import SubscriptionFallback from '../SubscriptionFallback';
import FeedContent from './FeedContent';

export default function Feed() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <section className="flex flex-col items-start ml-380">
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-4xl">Others&apos; Stories</div>
        <div className="w-260 h-2 bg-primary mb-2" />
        <div className="w-270 h-2 bg-primary mb-2" />
      </div>
      <article>
        <AsyncBoundaryWithQuery pendingFallback={<div>Loading...</div>}>
          <SubscriptionFallback>
            <FollowPostFetcher page={currentPage}>
              <FeedContent
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </FollowPostFetcher>
          </SubscriptionFallback>
        </AsyncBoundaryWithQuery>
      </article>
    </section>
  );
}
