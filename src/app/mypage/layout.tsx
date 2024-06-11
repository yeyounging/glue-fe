import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav, NavigationIcons } from '@/components/Common';

export const metadata: Metadata = {
  title: 'glue - mypage',
  description: 'glue - mypage',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Nav className="flex justify-between px-30 pt-30">
        <Link href="/" className="text-20 font-luckiest">
          Glue
        </Link>
        <NavigationIcons />
      </Nav>
      {children}
    </main>
  );
}
