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
  hasNext: boolean;
  isFirst: boolean;
  isLast: boolean;
  commentItems: Comment[];
  total: number;
}
