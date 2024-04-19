import { Luckiest_Guy } from 'next/font/google';
import localFont from 'next/font/local';

export const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--luckiest',
});

export const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--pretendard',
});
