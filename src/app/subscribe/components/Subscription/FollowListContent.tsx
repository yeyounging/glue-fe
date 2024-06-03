'use client';

import { useFollowListContext } from '../SubscribeFetcher/SubscriptionContext';
import Pagination from '../Pagination';
import ProfileCard from '../ProfileCard';

interface FollowListContentProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function FollowListContent({
  currentPage,
  onPageChange,
}: FollowListContentProps) {
  const { blogItems, isFirst, isLast } = useFollowListContext();

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col gap-5">
        {blogItems?.map(({ blogId, nickname, title, profile }) => (
          <ProfileCard
            key={blogId}
            name={nickname}
            title={title}
            profile={profile}
          />
        ))}
      </div>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}
