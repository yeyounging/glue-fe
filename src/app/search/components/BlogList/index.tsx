import { generateId } from '@/utils';
import Pagination from '@/app/subscribe/components/Pagination';
import BlogCard from './BlogCard';
import { useSearchContext } from '../SearchFetcher/SearchContext';

interface BlogListProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function BlogList({ currentPage, onPageChange }: BlogListProps) {
  const { blogInfoItem } = useSearchContext();
  const { blogInfoList, isFirst, isLast } = blogInfoItem;
  return (
    <div>
      <div className="mt-30">
        <div className="flex flex-wrap gap-x-60 gap-y-30 justify-center">
          {blogInfoList.map(({ id, title, background, description }) => (
            <BlogCard
              id={id}
              key={generateId()}
              title={title}
              photoUrl={background}
              description={description}
            />
          ))}
        </div>
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
