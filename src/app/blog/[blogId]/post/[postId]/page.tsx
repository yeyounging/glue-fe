'use client';

import dynamic from 'next/dynamic';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
import { usePostDetailContext } from './components/PostDetailFetcher/PostDetailContext';
import CommentsWrapper from './components/CommentsWrapper';
import PostDetailHeader from './components/PostDetailHeader';
import StickerRenderer from './components/StickerRenderer';

const Editor = dynamic(() => import('@/components/Common/Editor'), {
  ssr: false,
});

export default function Page({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const {
    postDetail: { content },
  } = usePostDetailContext();

  return (
    <>
      <PostDetailHeader postId={postId} />

      <StickerRenderer />

      <Editor editable={false} initialData={content} className="min-h-500" />

      <CommentsWrapper postId={postId} />
    </>
  );
}
