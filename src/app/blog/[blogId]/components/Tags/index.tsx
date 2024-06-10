'use client';

import { useBlogPageContext } from '../BlogFetcher/BlogContext';

export default function Tags() {
  const {
    blogPostItem: { hashtagNames },
  } = useBlogPageContext();

  return (
    <div className="px-30 py-20 mr-50">
      <div className="font-semibold text-2xl">tags.</div>
      <div className="h-1 w-200 bg-[#323131] m-3" />
      <ul className="py-20 text-[20px]">
        {hashtagNames.map((tag) => (
          <li key={tag} className="py-5">
            # {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
