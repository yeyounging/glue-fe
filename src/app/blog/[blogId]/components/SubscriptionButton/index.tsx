'use client';

import { useState } from 'react';
import { Button } from '@/components/Common';
import { cn } from '@/utils';
import { usePostSubscribe } from './api/queries';
import { useBlogPageContext } from '../BlogFetcher/BlogContext';

export default function SubscriptionButton() {
  const {
    isSubscribe,
    blogInfo: { blogId },
  } = useBlogPageContext();
  const [Subscribe, setSubscribe] = useState<boolean>(isSubscribe);
  const { mutate } = usePostSubscribe(blogId, Subscribe);

  const handleClick = () => {
    mutate();
    setSubscribe((prev) => !prev);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className={cn(
          'font-semibold w-120 h-30 m-25',
          Subscribe ? 'bg-white text-primary' : 'bg-primary text-white',
        )}
      >
        {Subscribe ? 'Unsubscribe' : 'Subscribe'}
      </Button>
    </div>
  );
}
