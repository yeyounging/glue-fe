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
  title: string;
  content: string;
  temporaryState: boolean;
  categoryName: string;
  hashtags?: string[];
  photoUrls?: string[];
  postStickerItemList: StickerRequest[];
}

export type NonParameterBlogPostRequest =
  | 'content'
  | 'temporaryState'
  | 'postStickerItemList';

export const postBlogPost = ({ ...post }: BlogPostRequest) =>
  http.post({ url: `/posts`, data: post });
