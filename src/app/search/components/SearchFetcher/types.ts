import { PaginationInfo } from '@/api';

export interface PostSearchItem extends PaginationInfo {
  postSearchList: Array<{
    blogId: number;
    postId: number;
    title: string;
    preview: string;
    photoUrl: string;
  }>;
  listSize: number;
  totalPage: number;
  totalElements: number;
}

export interface BlogInfoItem extends PaginationInfo {
  blogInfoList: Array<{
    id: number;
    title: string;
    description: string;
    profile: string;
    background: string;
  }>;
  listSize: number;
  totalPage: number;
  totalElements: number;
}

export interface SearchResponse {
  postSearchItem: PostSearchItem;
  blogInfoItem: BlogInfoItem;
}
