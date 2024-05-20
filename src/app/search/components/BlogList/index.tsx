import { users } from '@/app/lib/dummyData';
import BlogCard from './BlogCard';

export default function BlogList() {
  return (
    <div className="mt-30">
      <div className="flex flex-wrap gap-x-60 gap-y-30 justify-center">
        {users.map((user) => (
          <BlogCard key={user.id} id={user.id} />
        ))}
      </div>
    </div>
  );
}
