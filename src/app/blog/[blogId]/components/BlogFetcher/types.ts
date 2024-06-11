export interface BlogPageInfo {
  loginBlogId: number;
  memberName: string;
  isSubscribe: boolean;
  blogInfo: {
    blogId: number;
    title: string;
    description: string;
    profile: string;
    background: string;
  };
  postItems: [
    {
      blogId: number;
      postId: number;
      title: string;
      preview: string;
      photo: string[];
    },
  ];
  hashtagNames: string[];
}

export interface BoardResponse {
  postItems: [
    {
      blogId: number;
      postId: number;
      title: string;
      preview: string;
      photoUrl: string;
    },
  ];
  listSize: number;
  totalPage: number;
  totalElements: number;
  isFirst: true;
  isLast: true;
}
