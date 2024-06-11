'use client';

import { useState } from 'react';
import { Button } from '@/components/Common';
import { useSearchParams } from 'next/navigation';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import { SearchBox, ContentList, BlogList } from './components';
import { SearchResultFetcher } from './components/SearchFetcher';
import SearchFallback from './components/SearchFallback';

export default function Page() {
  const [postView, setPostView] = useState(true);
  const searchParams = useSearchParams();
  const query = searchParams.get('query') as string;

  const buttonText = postView === true ? '블로그 보기' : '게시물 보기';

  const toggleView = () => {
    setPostView((prev) => !prev);
  };

  return (
    <div className="px-200 text-[#171717]">
      <SearchBox />
      <div className="flex flex-row justify-end px-10">
        <Button
          className="bg-transparent text-primary font-semibold underline underline-offset-4"
          onClick={toggleView}
        >
          {buttonText}
        </Button>
      </div>
      <div className="p-30 py-40 bg-[#c78f6a] bg-opacity-10 rounded-5 shadow-lg">
        <AsyncBoundaryWithQuery>
          <SearchFallback>
            <SearchResultFetcher size={10} keyword={query}>
              <div>{postView ? <ContentList /> : <BlogList />}</div>
            </SearchResultFetcher>
          </SearchFallback>
        </AsyncBoundaryWithQuery>
      </div>
    </div>
  );
}
