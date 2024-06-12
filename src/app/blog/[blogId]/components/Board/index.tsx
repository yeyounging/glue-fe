'use client';

import { useState } from 'react';
import { BoardFetcher } from '../BlogFetcher';
import BoardContent from './BoardContent';

export default function Board({ blogId }: { blogId: number }) {
  const [page, setPage] = useState<number>(1);

  return (
    <BoardFetcher blogId={blogId} page={page}>
      <BoardContent page={page} setPage={setPage} />
    </BoardFetcher>
  );
}
