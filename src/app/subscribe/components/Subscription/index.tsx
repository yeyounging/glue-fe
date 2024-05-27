'use client';

import { useState } from 'react';
import { Button } from '@/components/Common';
import { cn } from '@/utils';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import { FollowListFetcher, FollowerListFetcher } from '../SubscribeFetcher';
import SubscriptionFallback from '../SubscriptionFallback';
import FollowListContent from './FollowListContent';
import FollowerListContent from './FollowerListContent';

export default function Subscription() {
  const [selectedButton, setSelectedButton] = useState<'내가구독' | '나를구독'>(
    '내가구독',
  );
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <section className="fixed px-20 flex flex-col items-center">
      <div className="text-bold text-[17px] text-primary font-luckiest px-30 pt-100">
        SUBSCRIPTION
      </div>
      <div className="flex flex-row gap-5 justify-center pb-30">
        <Button
          className={cn(
            selectedButton === '내가구독' &&
              'border-primary text-primary font-semibold',
            'border bg-white rounded-30 p-6 text-[12px] transition-all duration-100',
          )}
          onClick={() => setSelectedButton('내가구독')}
        >
          내가 구독하는
        </Button>
        <Button
          className={cn(
            selectedButton === '나를구독' &&
              'border-primary text-primary font-semibold',
            'border bg-white rounded-30 p-6 text-[12px] transition-all duration-100',
          )}
          onClick={() => setSelectedButton('나를구독')}
        >
          나를 구독하는
        </Button>
      </div>
      <AsyncBoundaryWithQuery pendingFallback={<div>Loading...</div>}>
        <SubscriptionFallback>
          {selectedButton === '내가구독' && (
            <FollowListFetcher page={currentPage}>
              <FollowListContent
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </FollowListFetcher>
          )}
          {selectedButton === '나를구독' && (
            <FollowerListFetcher page={currentPage}>
              <FollowerListContent
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </FollowerListFetcher>
          )}
        </SubscriptionFallback>
      </AsyncBoundaryWithQuery>
    </section>
  );
}
