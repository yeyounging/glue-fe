import { ReactNode } from 'react';
import { cn } from '@/utils';

interface PortalProps {
  children?: ReactNode;
  id: string;
  className?: string;
}

export default function PortalContainer({
  children,
  id,
  className,
}: PortalProps) {
  return (
    <div id={id} className={cn('w-inherit h-inherit', className)}>
      {children}
    </div>
  );
}
