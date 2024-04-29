'use client';

import { useRef, PointerEvent, ReactNode } from 'react';
import './card.css';
import { cn } from '@/utils';

type TiltableSkillCardProps = {
  children?: ReactNode;
  width?: string;
  height?: string;
};

function Card({
  width = 'w-200',
  height = 'h-260',
  children,
}: TiltableSkillCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const darkOverlayRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: PointerEvent) => {
    if (containerRef.current && overlayRef.current && darkOverlayRef.current) {
      const { offsetX, offsetY } = e.nativeEvent;
      const rotateY = (5 / 36) * offsetX - 20;
      const rotateX = (5 / 48) * offsetY - 20;

      containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      overlayRef.current.style.backgroundPosition = `${
        offsetX / 5 + offsetY / 5
      }%`;

      overlayRef.current.style.filter = 'opacity(0.8)';
    }
  };

  const handlePointOut = () => {
    if (containerRef.current && overlayRef.current && darkOverlayRef.current) {
      overlayRef.current.style.filter = 'opacity(0)';

      darkOverlayRef.current.style.background =
        'linear-gradient(150deg, rgba(55, 55, 55, 1) 0%, rgba(82, 82, 82, 1) 100%)';

      containerRef.current.style.transform =
        'perspective(350px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'container bg-[white] opacity-[88%] flex flex-col items-center',
        width,
        height,
      )}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointOut}
    >
      <div
        ref={overlayRef}
        className={cn('overlay', width, height)}
        style={{
          filter: 'opacity(0.8)',
        }}
      />
      <div
        ref={darkOverlayRef}
        className={cn('darkOverlay opacity-0', width, height)}
      />

      {children}
    </div>
  );
}

function CardImage({ children }: { children: ReactNode }) {
  return <div className="mt-10 relative w-100 h-100 mb-30">{children}</div>;
}

function CardTitle({ children }: { children: string }) {
  return (
    <h1 className="font-pretendard mb-20 text-18 font-semibold">{children}</h1>
  );
}

function CardDescription({ children }: { children: string }) {
  return <div className="font-pretendard text-16 mb-5">{children}</div>;
}

function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('font-luckiest text-16', className)}>{children}</div>
  );
}

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Footer = CardFooter;

export default Card;
