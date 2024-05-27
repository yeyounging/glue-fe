export interface Comment {
  memberId: number;
  commentId: number;
  content: string;

  // 블로그 프로필 이미지
  blogProfile: string;
  blogTitle: string;
  createdAt: string;
  parentCommentId: number;
  hasChildComment: boolean;
}

export interface CommentsResponse {
  loginMemberId: number;

  commentItemList: {
    hasNext: boolean;
    isFirst: boolean;
    isLast: boolean;
    commentItems: Comment[];

    totalPage: number;
  };
}
