import { PaginationInfo } from '@/api';

export interface SubscriptionList {
  blogId: number;
  nickname: string;
  title: string;
  profile?: string;
}

export interface SubscriptionListResponse extends PaginationInfo {
  blogItems: SubscriptionList[];
}

export interface FollowPostResponse extends PaginationInfo {
  blogPostPreviews: Array<{
    blogItem: SubscriptionList;
    postItem: {
      blogId: number;
      postId: number;
      title: string;
      preview: string;
      photo: string;
    };
  }>;
}
