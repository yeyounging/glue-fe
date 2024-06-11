'use client';

import { useState } from 'react';
import { Button, DownArrow, HamburgerMenu, Pencil } from '@/components/Common';
import Link from 'next/link';
import {
  Tags,
  Albums,
  StoryBox,
  ProfileBox,
  BlogBackground,
  BlogHeader,
  Board,
} from './components';
import { useBlogPageContext } from './components/BlogFetcher/BlogContext';

export default function Page() {
  const [showBoard, setShowBoard] = useState(false);
  const {
    blogInfo: { blogId },
    loginBlogId,
  } = useBlogPageContext();

  return (
    <BlogHeader>
      <div className="w-full h-full font-pretendard">
        <BlogBackground />
        <div className="flex flex-row p-150">
          <section className="flex flex-col gap-100 items-center">
            <ProfileBox />
            <Tags />
          </section>
          <section className="relative flex flex-col h-full w-full mr-50">
            <div className="absolute top-0 right-0 py-4">
              <div className="flex flex-row gap-10 items-center">
                {blogId === loginBlogId && (
                  <Link href="/write">
                    <Button className="bg-secondary">
                      <Pencil className="w-20" />
                    </Button>
                  </Link>
                )}
                <Button
                  className="bg-secondary"
                  onClick={() => setShowBoard((prev) => !prev)}
                >
                  {showBoard ? <DownArrow /> : <HamburgerMenu />}
                </Button>
              </div>
            </div>

            {showBoard ? (
              <Board blogId={blogId} />
            ) : (
              <>
                <StoryBox />
                <Albums />
              </>
            )}
          </section>
        </div>
      </div>
    </BlogHeader>
  );
}
