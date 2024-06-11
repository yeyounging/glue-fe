'use client';

import { generateId } from '@/utils';
import { useBlogPageContext } from '../BlogFetcher/BlogContext';

export function Story({ title, content }: { title: string; content: string }) {
  return (
    <div className="h-140">
      <div className="h-30 text-xl font-bold ">{title}</div>
      <div className="my-5 h-100 white-space:normal break-words text-overflow">
        {content}
      </div>
    </div>
  );
}

export default function StoryBox() {
  const { postItems } = useBlogPageContext();

  return (
    <section className="w-full px-100">
      <header className="flex flex-row items-center justify-between w-full pr-10">
        <div className="flex flex-col justify-center items-center">
          <div className="font-extrabold text-4xl">Stories</div>
          <p className="w-130 h-3 bg-primary mb-2" />
          <p className="w-140 h-3 bg-primary mb-2" />
        </div>
      </header>
      <article className="w-full grid grid-cols-2 gap-30 mt-40">
        {postItems.map(({ preview, title }) => (
          <Story key={generateId()} title={title} content={preview} />
        ))}
      </article>
    </section>
  );
}
