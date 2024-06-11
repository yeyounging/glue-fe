import { PartialBlock } from '@blocknote/core';

interface Sticker {
  stickerId: number;
  xLocation: number;
  yLocation: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
  url: string;
}

export interface PostDetailResponse {
  postDetail: {
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
    isLike: boolean;
    categoryName: string;

    photoUrls: string[];

    postStickerItems: Sticker[];
    postHashtags: string[];
    isSubscribe: boolean;
    nickname: string;
  };

  loginMemberId: number;
}
