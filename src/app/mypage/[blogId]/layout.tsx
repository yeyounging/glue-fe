import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav, NavigationIcons } from '@/components/Common';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import MyPageFallback from './components/MyPageFallback';
import MyPageFetcher from './components/MyPageFetcher';

export const metadata: Metadata = {
  title: 'glue - mypage',
  description: '마이페이지',
};

export default function Layout({
  children,
  params: { blogId },
}: {
  children: React.ReactNode;
  params: { blogId: number };
}) {
  return (
    <main>
      <Nav className="flex justify-between px-30 pt-30">
        <Link href="/" className="text-20 font-luckiest">
          Glue
        </Link>
        <NavigationIcons />
      </Nav>
      <AsyncBoundaryWithQuery pendingFallback={<div>loading 중..</div>}>
        <MyPageFallback>
          <MyPageFetcher blogId={blogId}>{children}</MyPageFetcher>
        </MyPageFallback>
      </AsyncBoundaryWithQuery>
    </main>
  );
}
