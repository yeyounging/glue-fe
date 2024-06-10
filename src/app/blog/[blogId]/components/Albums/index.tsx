'use client';

import { useBlogPageContext } from '../BlogFetcher/BlogContext';
import Slider from './\bSlider';

export default function Albums() {
  const {
    blogPostItem: { postItems },
  } = useBlogPageContext();

  // FIXME: photoUrl 적용
  const photos = Array(20)
    .fill(null)
    .map((_, index) => postItems[index]?.photo || '/tempImage/6.jpg');

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
