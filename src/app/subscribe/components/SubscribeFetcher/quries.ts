'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getFollowList, getFollowerList, getFollowPost } from './api';

export const useFollowList = (page: number) =>
  useSuspenseQuery({
    queryKey: ['follows-list', page],
    queryFn: () => getFollowList(page),
    refetchOnMount: false,
    select: (data) => data.result,
  });

export const useFollowerList = (page: number) =>
  useSuspenseQuery({
    queryKey: ['follower-list', page],
    queryFn: () => getFollowerList(page),
    refetchOnMount: false,
    select: (data) => data.result,
  });

export const useFollowPost = (page: number) =>
  useSuspenseQuery({
    queryKey: ['follows-post', page],
    queryFn: () => getFollowPost(page),
    refetchOnMount: false,
    select: (data) => data.result,
  });
