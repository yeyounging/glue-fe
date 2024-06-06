'use client';

import { Button } from '@/components/Common';
import Profile from './components/Profile';
import Title from './components/Title';
import Background from './components/Background';
import BlogInfo from './components/BlogInfo';
import useSave from './components/hooks/useSave';

export default function Page() {
  const { handleSave } = useSave();

  return (
    <div>
      <Title />
      <section className="flex flex-col items-center py-400">
        <div className="h-1 w-500 bg-[#979696]" />
        <Profile />
        <div className="h-1 w-500 bg-[#979696]" />
        <BlogInfo />
        <div className="h-1 w-500 bg-[#979696]" />
        <Background />
        <Button className="w-100" onClick={handleSave}>
          SAVE
        </Button>
      </section>
    </div>
  );
}
