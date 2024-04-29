import { BackgroundDrawing, Underline } from '@/components/Common';

export default function Title() {
  return (
    <header className="w-full text-65 font-luckiest flex flex-col justify-center items-center mt-100">
      <div className="relative leading-tight">
        <p className="">Your</p>
        <BackgroundDrawing className="absolute-background-drawing w-290 h-100" />
      </div>
      <div className="relative flex flex-col items-center leading-tight">
        <p>playground</p>
        <Underline className="absolute bottom-2 w-500" />
      </div>
    </header>
  );
}
