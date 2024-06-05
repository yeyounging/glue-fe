import { http } from '@/api';

export interface BlogPostRequest {
  blogId: number;
  title: string;
  content: string;
  temporaryState: boolean;
  categoryName: string;
  hashtags?: string[];
}

export const postBlogPost = ({ blogId, ...post }: BlogPostRequest) =>
  http.post({ url: `/posts/${blogId}`, data: post });
