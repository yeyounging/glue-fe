'use client';

import Slider from './Slider';

export default function Albums() {
  return (
    <article className="flex flex-col w-full gap-20 px-100 items-start mt-30 overflow-scroll">
      <div className="flex flex-col  justify-center items-center">
        <div className="font-extrabold text-4xl">Albums</div>
        <p className="w-135 h-3 bg-primary mb-2" />
        <p className="w-145 h-3 bg-primary mb-2" />
      </div>

      <Slider />
    </article>
  );
}
