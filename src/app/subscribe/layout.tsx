import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Common';

export const metadata: Metadata = {
  title: 'glue - my subscription',
  description: '구독페이지',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Nav>
        <Link href="/" className="text-20 font-luckiest">
          Glue
        </Link>
      </Nav>
      {children}
    </main>
  );
}
