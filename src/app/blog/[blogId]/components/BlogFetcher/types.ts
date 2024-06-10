export interface BlogPageInfo {
  blogInfo: {
    title: string;
    description: string;
    profile: string;
    background: string;
  };
  blogPostItem: {
    postItems: [
      {
        blogId: number;
        postId: number;
        title: string;
        preview: string;
        photo: string;
      },
    ];
    hashtagNames: string[];
  };
  memberName: string;
}
