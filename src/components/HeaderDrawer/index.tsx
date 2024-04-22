'use client';

import { useState, ReactNode } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from '@/components/HeaderDrawer/drawer';
import { Close } from '../Common/Icons';
import Navigator from './Navigator';

export function HeaderDrawer({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const name = 'dotheZ';

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-300 h-full fixed right-0">
        <DrawerClose asChild>
          <div className="pl-250 py-30">
            <Close />
          </div>
        </DrawerClose>
        <div className="px-60 py-50">
          <div className="font-luckiest text-20 text-primary ">@ {name}</div>
          <p className="h-1 w-200 bg-[#b0aeae] mb-10" />
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
