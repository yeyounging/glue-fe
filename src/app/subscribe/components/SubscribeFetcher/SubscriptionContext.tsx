'use client';

import { generateContext } from '@/react-utils';
import { SubscriptionListResponse, FollowPostResponse } from './types';

export const [FollowListProvider, useFollowListContext] =
  generateContext<SubscriptionListResponse>({
    name: 'follow-list',
  });

export const [FollowerListProvider, useFollowerListContext] =
  generateContext<SubscriptionListResponse>({
    name: 'follower-list',
  });

export const [FollowPostProvider, useFollowPostContext] =
  generateContext<FollowPostResponse>({
    name: 'follow-post',
  });
