'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils';
import { ReactNode } from 'react';

const spring = {
  type: 'tween',
  stiffness: 700,
  damping: 30,
};

export default function Switch({
  checked,
  handleChange,
  LeftIcon,
  RightIcon,
}: {
  checked: boolean;
  handleChange: () => void;
  LeftIcon?: ReactNode;
  RightIcon?: ReactNode;
}) {
  return (
    <button
      aria-label="button"
      type="button"
      className={cn(
        'relative w-44 h-22 bg-[#D9D9D9] flex justify-start rounded-10 px-3 py-2 cursor-pointer',
        checked && 'justify-end',
      )}
      onClick={handleChange}
    >
      {LeftIcon && LeftIcon}
      {RightIcon && RightIcon}

      <motion.div
        className="w-18 h-18 bg-[white] rounded-full"
        layout
        transition={spring}
      />
    </button>
  );
}
