'use client';

import { useBlogPageContext } from '../BlogFetcher/BlogContext';
import Slider from './Slider';

export default function Albums() {
  const { postItems } = useBlogPageContext();

  const photos = postItems.flatMap(({ photo }) => photo);

  return (
    <article className="flex flex-col w-full gap-20 px-100 items-start">
      <div className="flex flex-col  justify-center items-center">
        <div className="font-extrabold text-4xl">Albums</div>
        <p className="w-135 h-3 bg-primary mb-2" />
        <p className="w-145 h-3 bg-primary mb-2" />
      </div>
      <Slider photos={photos} />
    </article>
  );
}
