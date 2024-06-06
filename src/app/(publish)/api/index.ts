import { http } from '@/api';

interface StickerRequest {
  stickerId: number;
  url: string;
  scaleX: number;
  scaleY: number;
  rotation: number;
  xLocation: number;
  yLocation: number;
}

export interface BlogPostRequest {
  blogId: number;
  title: string;
  content: string;
  temporaryState: boolean;
  categoryName: string;
  hashtags?: string[];
  photoUrls?: string[];
  postStickerItemList: StickerRequest[];
}

export const postBlogPost = ({ blogId, ...post }: BlogPostRequest) =>
  http.post({ url: `/posts/${blogId}`, data: post });
