export type ChangelogType = {
  _id?: string;
  changelogId: string;
  workspaceId: string;
  isDeleted?: boolean;
  tags: string[];
  labels: string[];
  title: string;
  plainTextContent: string;
  slateJsDescendantContent: string;
  createdBy?: string; // Assuming the ObjectId is represented as a string
  changelogUrl: string;
  linkedPosts: {
    postId: string;
    postUrl: string;
    title: string;
    boardUrl: string;
  }[]; // Array of linked posts
  createdAt: string;
  updatedAt: string;
};

// Type for Board
export type Board = {
  boardId: string;
  name: string;
  description?: string;
  url: string;
  createdBy: string; // ObjectId as string
  haveAccess: string[]; // Array of ObjectIds as strings
  isDeleted: boolean;
  boardVisibility: "private" | "public";
  isStarred: boolean;
  showOnHomePage: boolean;
  postCount: number;
};
