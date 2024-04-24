import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { luckiestGuy, pretendard } from './fonts';
import './globals.css';

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
    <html lang="en">
      <body
        className={`${luckiestGuy.variable} ${pretendard.variable} text-[#2f2e2e] `}
      >
        {children}
      </body>
    </html>
  );
}
