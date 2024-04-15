'use client';

import { MouseEvent, ReactNode, useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// FIXME: 애니메이션이 부드럽지 않음
export default function Sticker({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;

    if (!ref.current) {
      return;
    }

    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  }, []);

  const reset = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const { x, y } = position;

  return (
    <div className={className}>
      <motion.div
        className="w-fit hover:cursor-pointer p-50"
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
