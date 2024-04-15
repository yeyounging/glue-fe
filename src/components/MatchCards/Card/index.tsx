'use client';

import { useRef, PointerEvent } from 'react';
import './card.css';
import { cn } from '@/utils';

type TiltableSkillCardProps = {
  // eslint-disable-next-line
  data?: any;
};

export default function Card({ data }: TiltableSkillCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const darkOverlayRef = useRef<HTMLDivElement>(null);
  const isSpread = !!data;

  const handlePointerMove = (e: PointerEvent) => {
    if (containerRef.current && overlayRef.current && darkOverlayRef.current) {
      const { offsetX, offsetY } = e.nativeEvent;
      const rotateY = (5 / 36) * offsetX - 20;
      const rotateX = (5 / 48) * offsetY - 20;

      containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      if (!isSpread) {
        overlayRef.current.style.backgroundPosition = `${
          offsetX / 5 + offsetY / 5
        }%`;
      }

      if (isSpread) {
        const backgroundPosX =
          (offsetX / containerRef.current.offsetWidth) * 100;
        const backgroundPosY =
          (offsetY / containerRef.current.offsetHeight) * 100;

        darkOverlayRef.current.style.background = `radial-gradient(circle farthest-side at ${backgroundPosX}% ${backgroundPosY}%, transparent 0%, rgba(170, 170, 170, 1) 80%, rgba(82, 82, 82, 1) 100%)`;
      }

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
        'container bg-[white] opacity-[88%] flex justify-center',
        isSpread && 'hover:cursor-pointer',
      )}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointOut}
    >
      <div
        ref={overlayRef}
        className="overlay"
        style={{
          filter: isSpread ? 'opacity(0)' : 'opacity(0.8)',
        }}
      />
      <p className="pt-20">Hello!</p>
      <div
        ref={darkOverlayRef}
        className={cn('darkOverlay opacity-0', isSpread && 'opacity-90')}
      />
    </div>
  );
}
