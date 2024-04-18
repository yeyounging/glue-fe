import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import { luckiestGuy, pretendard } from './fonts';

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
      <body className={`${luckiestGuy.variable} ${pretendard.variable}`}>
        {children}
      </body>
    </html>
  );
}
