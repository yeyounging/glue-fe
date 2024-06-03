'use client';

import { ButtonHTMLAttributes, useMemo } from 'react';
import { mergeProps } from '@react-aria/utils';
import { AnimationProps, motion } from 'framer-motion';
import { StrictPropsWithChildren } from '@/types';
import { cn } from '@/utils';
import Button from '../Button';
import { useDropdown, UseDropdownProps } from './useDropdown';
import { DropdownProvider, useDropdownContext } from './DropdownContext';

interface DropdownProps extends UseDropdownProps, StrictPropsWithChildren {
  value?: string;
}

function Dropdown({ children, ...props }: DropdownProps) {
  const { Component, getBaseProps, ...rest } = useDropdown(props);

  return (
    <Component {...getBaseProps()}>
      <DropdownProvider {...rest}>{children}</DropdownProvider>
    </Component>
  );
}

function Trigger({
  children,
  ...props
}: StrictPropsWithChildren &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>) {
  const {
    context: { onOpenChange },
  } = useDropdownContext();

  return (
    <Button {...props} onClick={() => onOpenChange()}>
      {children}
    </Button>
  );
}

function Menu({ children }: StrictPropsWithChildren) {
  const { context, getMenuProps } = useDropdownContext();
  const { isOpen } = context;
  const dropdownAnimations: AnimationProps = useMemo(
    () => ({
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      exit: { opacity: 0, y: -10 },
    }),
    [],
  );

  return (
    <div {...getMenuProps()}>
      {isOpen && <motion.div {...dropdownAnimations}>{children}</motion.div>}
    </div>
  );
}

function Item({
  children,
  className,
  ...props
}: StrictPropsWithChildren &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>) {
  const { getItemButtonProps } = useDropdownContext();

  return (
    <Button
      {...mergeProps(getItemButtonProps(), props)}
      className={cn(
        'p-0 w-full h-28 !rounded-0 bg-[white/0.85] text-[black] text-[16px]',
        className,
      )}
    >
      {children}
    </Button>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
