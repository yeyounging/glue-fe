import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Luckiest_Guy } from 'next/font/google';
import './globals.css';

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

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
      <body className={luckiestGuy.className}>{children}</body>
    </html>
  );
}
