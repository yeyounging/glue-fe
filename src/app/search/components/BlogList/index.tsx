import { generateId } from '@/utils';
import BlogCard from './BlogCard';
import { useSearchContext } from '../SearchFetcher/SearchContext';

export default function BlogList() {
  const { blogInfoItem } = useSearchContext();
  const { blogInfoList } = blogInfoItem;

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
    </div>
  );
}
