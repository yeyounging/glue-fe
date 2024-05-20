import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Common';

export const metadata: Metadata = {
  title: '로그인',
  description: 'Glue, The Blog Playground!',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full">
      <Nav className="absolute">
        <Link href="/" className="text-20 font-luckiest">
          Glue
        </Link>
      </Nav>

      {children}
    </main>
  );
}
