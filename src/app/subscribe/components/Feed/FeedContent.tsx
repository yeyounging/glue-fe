import FeedBox from '../FeedBox';
import Pagination from '../Pagination';
import { useFollowPostContext } from '../SubscribeFetcher/SubscriptionContext';

interface FeedContentProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function FeedContent({
  currentPage,
  onPageChange,
}: FeedContentProps) {
  const { blogPostPreviews, isFirst, isLast } = useFollowPostContext();

  return (
    <div>
      <div className="grid grid-cols-3 gap-40 py-50">
        {blogPostPreviews?.map(({ blogItem, postItem }) => {
          const { postId, title, profile } = postItem;
          return (
            <FeedBox
              postId={postId}
              key={postId}
              title={title}
              preview={profile}
              photo={blogItem.profile}
              blogItem={blogItem}
            />
          );
        })}
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
