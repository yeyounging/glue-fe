import { PartialBlock } from '@blocknote/core';

interface Sticker {
  postStickerItem: {
    xlocation: number;
    ylocation: number;
    postStickerId: number;
    postId: number;
    stickerId: number;
    xLocation: number;
    yLocation: number;
    width: number;
    height: number;
    angle: number;
  };
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
    isSubscribe: boolean;
    categoryName: string;
    hashtags: string[];

    photoUrls: string[];

    postStickerUrlItems: {
      postStickerId: Sticker[];
    };
  };

  loginMemberId: number;
}
