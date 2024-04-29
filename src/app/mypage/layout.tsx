import type { Metadata } from 'next';
import Link from 'next/link';
import { NavigationIcons } from '@/components/Common';

export const metadata: Metadata = {
  title: 'glue - mypage',
  description: '마이페이지',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav className="flex justify-between px-30 pt-30">
        <Link href="/" className="text-20 font-luckiest">
          Glue
        </Link>
        <NavigationIcons />
      </nav>
      {children}
    </main>
  );
}
