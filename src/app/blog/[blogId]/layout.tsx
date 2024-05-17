import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'myblog',
  description: 'Glue - myblog',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
