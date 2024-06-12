'use client';

import { useState } from 'react';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import { BoardFetcher } from '../BlogFetcher';
import BoardContent from './BoardContent';

export default function Board({ blogId }: { blogId: number }) {
  const [page, setPage] = useState<number>(0);

  return (
    <AsyncBoundaryWithQuery>
      <BoardFetcher blogId={blogId} page={page}>
        <BoardContent page={page} setPage={setPage} />
      </BoardFetcher>
    </AsyncBoundaryWithQuery>
  );
}
