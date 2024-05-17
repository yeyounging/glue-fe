import { PartialBlock } from '@blocknote/core';

export interface PostDetailResponse {
  postId: number;
  title: string;
  content: PartialBlock[];
  likeCount: number;
  temporaryState: boolean;
  state: boolean;
  createdAt: string;
  updatedAt: string;
  memberId: number;
  blogId: number;
}
