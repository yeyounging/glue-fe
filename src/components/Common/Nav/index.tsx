import { ReactNode } from 'react';
import { cn } from '@/utils';

export default function Nav({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <nav className={cn('flex justify-between items-center p-30', className)}>
      {children}
    </nav>
  );
}
