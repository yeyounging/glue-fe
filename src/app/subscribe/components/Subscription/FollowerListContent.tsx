'use client';

import { useFollowerListContext } from '../SubscribeFetcher/SubscriptionContext';

import Pagination from '../Pagination';
import ProfileCard from '../ProfileCard';

interface FollowerListContentProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function FollowerListContent({
  currentPage,
  onPageChange,
}: FollowerListContentProps) {
  const { blogItems, isFirst, isLast } = useFollowerListContext();

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col gap-5">
        {blogItems?.map(({ blogId, nickname, title, profile }) => (
          <ProfileCard
            blogId={blogId}
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
