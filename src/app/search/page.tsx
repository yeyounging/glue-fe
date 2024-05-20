'use client';

import { useState } from 'react';
import { Button } from '@/components/Common';
import { SearchBox, ContentList, BlogList } from './components';

export default function Page() {
  const [postView, setPostView] = useState(true);
  const buttonText = postView === true ? '블로그 보기' : '게시물 보기';

  const toggleView = () => {
    setPostView((prev) => !prev);
  };

  return (
    <div className="px-200">
      <SearchBox />
      <div className="flex flex-row justify-end px-10">
        <Button
          className="bg-transparent text-primary font-semibold underline underline-offset-4"
          onClick={() => toggleView()}
        >
          {buttonText}
        </Button>
      </div>
      <div className="pt-20">{postView ? <ContentList /> : <BlogList />}</div>
    </div>
  );
}
