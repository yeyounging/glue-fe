import Image from 'next/image';
import { cn } from '@/utils';
import { BackgroundDrawing, Underline } from '../Common/Icons';
import Sticker from './Sticker';

const STICKER_MAP = [
  { title: 'IceHeart', className: 'top-[445px] left-40' },
  { title: 'Bomb', className: 'top-[354px] right-27' },
  { title: 'Emoji', className: 'bottom-120 left-[500px]' },
  { title: 'Clown', className: 'bottom-20 left-[150px]' },
  { title: 'Perfect', className: 'bottom-80 right-[450px]' },
  { title: 'Diamond', className: 'bottom-200 right-[150px]' },
] as const;

export default function PlayGround() {
  return (
    <section className="h-[1185px] relative">
      <div className="w-full h-257 bg-gradient-to-b from-[#F08D53] to-white" />

      {STICKER_MAP.map(({ title, className }) => (
        <Sticker key={title} className={cn('absolute', className)}>
          <Image
            src={`/images/${title}.png`}
            alt={`${title} image`}
            width={72}
            height={72}
          />
        </Sticker>
      ))}

      <div className="w-full text-[110px] flex flex-col justify-center items-center mt-260">
        <div className="relative">
          <p className="">blog</p>
          <BackgroundDrawing className="absolute-background-drawing" />
        </div>

        <div className="relative flex flex-col justify-center items-center">
          playground
          <Underline className="absolute bottom-25" />
        </div>
      </div>
    </section>
  );
}
