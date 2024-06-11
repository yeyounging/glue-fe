'use client';

import { useUserContext } from '@/components/Common';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import Profile from './components/Profile';
import Title from './components/Title';
import Background from './components/Background';
import BlogInfo from './components/BlogInfo';
import MyPageFallback from './components/MyPageFallback';
import MyPageFetcher from './components/MyPageFetcher';

export default function Page() {
  const { loginId } = useUserContext();

  return (
    <div>
      <AsyncBoundaryWithQuery pendingFallback={<div>loading 중..</div>}>
        <MyPageFallback>
          <MyPageFetcher blogId={loginId}>
            <Title />
            <section className="flex flex-col items-center py-400">
              <div className="h-1 w-500 bg-[#979696]" />
              <Profile />
              <div className="h-1 w-500 bg-[#979696]" />
              <BlogInfo />
              <div className="h-1 w-500 bg-[#979696]" />
              <Background />
            </section>
          </MyPageFetcher>
        </MyPageFallback>
      </AsyncBoundaryWithQuery>
    </div>
  );
}
