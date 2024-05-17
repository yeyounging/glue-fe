import type { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import { ToastProvider } from '@/components/Common';
import { GlobalErrorBoundary } from '@/react-utils/ErrorBoundary';
import { luckiestGuy, pretendard } from './fonts';
import '../styles/globals.css';
import QueryProvider from './lib/QueryProvider';

export const metadata: Metadata = {
  title: 'Glue',
  description: 'Glue, The Blog Playground!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${luckiestGuy.variable} ${pretendard.variable}`}>
        <GlobalErrorBoundary renderFallback={<div>에러가 발생했어요 !</div>}>
          <Suspense fallback={<div>로딩 중입니다...</div>}>
            <ToastProvider>
              <QueryProvider>{children}</QueryProvider>
            </ToastProvider>
          </Suspense>
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}
