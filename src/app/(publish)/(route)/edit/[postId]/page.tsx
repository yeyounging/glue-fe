'use client';

import { usePostDetailContext } from '@/app/blog/[blogId]/post/[postId]/components/PostDetailFetcher/PostDetailContext';
import PostEditor from '@/app/(publish)/components/PostEditor';

export default function Page() {
  const postDetail = usePostDetailContext();

  return <PostEditor {...postDetail} />;
}
