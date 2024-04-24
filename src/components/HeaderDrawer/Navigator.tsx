'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/utils';

export default function Navigator() {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        label: '마이페이지',
        isActive: pathname === '/mypage',
        href: '/mypage',
      },
      {
        label: '나의 구독',
        isActive: pathname === '/subscribe',
        href: '/subscribe',
      },
      {
        label: '블로그 추천',
        isActive: pathname === '/recommendation',
        href: '/mypage',
      },
      {
        label: '로그아웃',
        isActive: false,
        href: '/',
      },
    ];
  }, [pathname]);
  return (
    <section className="flex flex-col p-4">
      {routes.map(({ label, href, isActive }) => {
        return (
          <Link key={label} href={href}>
            <div
              className={cn(
                'text-16 text-[#5d5b5b] rounded-8 py-2 px-5 mb-30 inline-block',
                isActive && 'bg-primary/20',
              )}
            >
              {label}
            </div>
          </Link>
        );
      })}
    </section>
  );
}
