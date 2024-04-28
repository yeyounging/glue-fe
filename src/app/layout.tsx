import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { luckiestGuy, pretendard } from './fonts';
import '../styles/globals.css';

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
        {children}
      </body>
    </html>
  );
}
