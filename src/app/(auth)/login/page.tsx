import Link from 'next/link';
import { KakaoLoginIcon } from '@/components/Common';

export default function Page() {
  const fontStyle = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  } as const;

  return (
    <section className="w-full h-full bg-primary flex justify-center items-center">
      <div className="w-300 flex flex-col items-center gap-15">
        <h1 className="font-luckiest text-30">LOGIN</h1>

        <Link
          style={fontStyle}
          className="relative w-full h-45 text-15 font-semibold px-14 flex justify-center items-center rounded-button bg-[#FEE500]"
          href={process.env.NEXT_PUBLIC_LOGIN_URL!}
        >
          <KakaoLoginIcon className="absolute left-14" />
          카카오 로그인
        </Link>
      </div>
    </section>
  );
}
