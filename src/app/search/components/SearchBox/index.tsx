'use client';

import { Input, Search } from '@/components/Common';
import { useSearch } from '@/hooks';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SearchBox() {
  const { searchQuery, handleInputChange, handleKeyDown } = useSearch();
  const query = useSearchParams().get('query') as string;
  const [placeholder, setPlaceholder] = useState(query);

  return (
    <article className="flex justify-center py-30">
      <div
        className="h-42 w-480 flex flex-row items-center justify-between
            rounded-2xl gap-15 p-10 border"
      >
        <Input
          className="h-full w-full bg-transparent placeholder-[#191919]"
          placeholder={placeholder}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setPlaceholder('')}
          onBlur={() => setPlaceholder(query)}
        />
        <Search />
      </div>
    </article>
  );
}
