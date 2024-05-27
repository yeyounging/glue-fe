'use client';

import { StrictPropsWithChildren } from '@/types';
import { useFollowList, useFollowerList, useFollowPost } from './quries';
import {
  FollowListProvider,
  FollowerListProvider,
  FollowPostProvider,
} from './SubscriptionContext';

type PageWithChildren = StrictPropsWithChildren & { page: number };

export function FollowListFetcher({ children, page }: PageWithChildren) {
  const { data } = useFollowList(page);

  return <FollowListProvider {...data}>{children}</FollowListProvider>;
}

export function FollowerListFetcher({ children, page }: PageWithChildren) {
  const { data } = useFollowerList(page);

  return <FollowerListProvider {...data}>{children}</FollowerListProvider>;
}

export function FollowPostFetcher({ children, page }: PageWithChildren) {
  const { data } = useFollowPost(page);

  return <FollowPostProvider {...data}>{children}</FollowPostProvider>;
}
