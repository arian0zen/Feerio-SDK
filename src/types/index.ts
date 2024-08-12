import { IconType } from "react-icons";

export interface OwnerType {
  name: string;
  email: string;
  accountType: string;
  [key: string]: any; // Index signature allowing additional properties
}

export interface OwnerObject {
  _id?: string;
  name: string;
  email: string;
  profilePic: string;
  from: string;
  phoneNumber: string;
  planHistory: any[]; // Assuming planHistory is an array of any type
  accountType: string;
  workspaces: string[]; // Array of ObjectIds referencing workspaces
  createdAt?: Date; // This will be added automatically by Mongoose with timestamps
  updatedAt?: Date; // This will be added automatically by Mongoose with timestamps
}

// Type for WorkspaceCreatedBy
export type WorkspaceCreatedBy = {
  ownerId: string; // ObjectId as string
  role: "editor" | "readonly" | "admin";
};

// Type for Collaborator
export type Collaborator = {
  collaboratorId: string; // ObjectId as string
  role: "editor" | "readonly" | "admin";
};

// type for populated Collaborator
export type PopulatedCollaborator = {
  collaboratorId: {
    name: string;
    email: string;
    profilePic: string;
    _id?: string;
  };
  role: "editor" | "readonly" | "admin";
  _id?: string;
};

// Type for Comment in Posts
export type Comment = {
  comment: string;
  commentType: "internal" | "public";
  commentedBy: string; // ObjectId as string
  commentedAt: string;
  replies?: {
    reply: string;
    repliedBy: string; // ObjectId as string
    repliedAt: Date;
    _id: string;
  }[];
  _id?: string;
};

export type PopulatedComment = {
  comment: string;
  commentType: "internal" | "public";
  commentedBy: {
    name: string;
    email: string;
    profilePic: string;
    _id: string;
  };
  commentedAt: string;
  replies: {
    reply: string;
    repliedBy: {
      name: string;
      email: string;
      profilePic: string;
      _id: string;
    };
    repliedAt: string;
    _id: string;
  }[];
  _id?: string;
  isPinned?: boolean;
};

export type populatedMergedWithData = {
  mergedWith: {
    postId: {
      title: string;
      content: string;
      createdBy: {
        name: string;
        email: string;
        profilePic: string;
      };
      createdAt: string;
      boardId: string;
      postUrl: string;
    };
    mergedAt: string;
    mergedBy: {
      name: string;
      email: string;
      profilePic: string;
    };
  };
};

export type UpVote = {
  upVotedBy: OwnerType; // ObjectId as string
  upVotedAt: Date;
};

// Type for Posts
export type Post = {
  postId: string;
  title: string;
  content: string;
  createdBy: {
    name: string;
    email: string;
    profilePic: string;
  }; // ObjectId as string
  isDeleted?: boolean;
  postStatus:
    | "Under Review"
    | "Planned"
    | "In Progress"
    | "Completed"
    | "Draft"
    | "Archived"
    | "Open"
    | "Closed";
  upVotes?: UpVote[];
  // comments: any[]; // Array of ObjectIds as strings or Array of Comment objects
  workspaceId: string;
  boardId: string;
  boardName: string;
  createdAt: string;
  updatedAt?: string;
  populatedComments: PopulatedComment[];
  estimatedDate?: {
    date: string;
    showInPublic: boolean;
  };
  pinnedComments?: string[]; // Array of ObjectIds as strings
  mergedWith?: {
    postId: string;
    mergedAt: string;
    mergedBy: string; // ObjectId as string
  };
  populatedMergedWithData?: populatedMergedWithData;
  postUrl?: string;
  upVotesCount?: number;
  isAlreadyUpVoted?: boolean;
  commentsCount: number;
};

// Type for PublicViewPosts
export type PublicViewPost = {
  postId: string;
  title: string;
  content: string;
  createdBy: {
    name: string;
    email: string;
    profilePic: string;
  };
  isDeleted: boolean;
  postStatus:
    | "Under Review"
    | "Planned"
    | "In Progress"
    | "Completed"
    | "Draft"
    | "Archived"
    | "Open"
    | "Closed";
  upVotes?: {
    upVotedBy: string; // ObjectId as string
    upVotedAt: string;
  }[];
  comments: number; // this is the commentsCount
  workspaceId: string;
  boardId: string;
  boardName: string;
  createdAt: string;
  estimatedDate?: {
    date: string;
    showInPublic: boolean;
  };
  postUrl?: string;
  category?: string[];
  tags?: string[];
  upVotesCount?: number;
  isAlreadyUpVoted?: boolean;
  // commentsCount: number;
  populatedMergedWithData?: populatedMergedWithData;
  activities: Activity[];
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

// Type for Workspace
export type Workspace = {
  workspaceId: string;
  email: string;
  collaborators: Collaborator[];
  createdBy: WorkspaceCreatedBy;
  companyName: string;
  companySubDomain: string;
  usingFeerioFor: string;
  boards: Board[];
  users?: string[]; // Array of ObjectIds as strings
  isDeleted: boolean;
  createdAt?: Date; // Optional as it is handled by Mongoose timestamps
  updatedAt?: Date; // Optional as it is handled by Mongoose timestamps
  workspaceDetails: {
    boards: [];
    collaborators: [];
    companyName: string;
    companySubDomain: string;
    workspaceId: string;
  };
};

export type Activity = {
  activity: string;
  activityBy: {
    name: string;
    email: string;
    profilePic: string;
  };
  activityAt: string;
};

export type StepTypes = {
  stepNo: number;
  title: string;
  description: string;
  canBeSkipped: boolean;
  isCompleted: boolean;
  isSkipped: boolean;
  stepIcon: IconType;
};

export type ActivityTrend = {
  postsCreated: number;
  postPoints: { x: number; y: number }[];
  commentsAdded: number;
  commentPoints: { x: number; y: number }[];
  upVotesAdded: number;
  upVotePoints: { x: number; y: number }[];
  totalActivities: number;
  activityPoints: { x: number; y: number }[];
};

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

export interface CurrentWorkspaceDetails {
  workspaceId: string;
  collaborators: PopulatedCollaborator[];
  companyName: string;
  companySubDomain: string;
  boards: Board[];
  createdBy?: {
    name: string;
    email: string;
    profilePic: string;
  };
  email?: string;
}

// Define the TierFeature type || ALL FEATURES
export type TierFeature =
  | "PRIVATE_BOARD"
  | "EDITABLE_FEERIO_URL"
  | "EMAIL_NOTIFICATIONS"
  | "CUSTOM_BRANDING"
  | "INTERNAL_COMMENTS"
  | "CUSTOM_CHANGELOG_LABELS"
  | "ROLE_BASED_PERMISSIONS"
  | "UNLIMITED_ADMINS"
  | "5 BOARDS"
  | "UNLIMITED_BOARDS"
  | "2 WORKSPACES"
  | "20 WORKSPACES"
  | "UNLIMITED_POSTS"
  | "UNLIMITED_COMMENTS"
  | "UNLIMITED_CHANGELOGS";

export type TIER_NAMES = "FREE_TIER" | "STARTUP_TIER" | "BUSINESS_TIER";

// Define the Tiers interface
export interface Tiers {
  FREE_TIER: TierFeature[];
  STARTUP_TIER: TierFeature[];
  BUSINESS_TIER: TierFeature[];
}

// Define the tiers object
export const tiers: Tiers = {
  FREE_TIER: [],
  STARTUP_TIER: [
    "PRIVATE_BOARD",
    "EDITABLE_FEERIO_URL",
    "EMAIL_NOTIFICATIONS",
    "CUSTOM_BRANDING",
    "INTERNAL_COMMENTS",
    "UNLIMITED_ADMINS",
    "5 BOARDS",
    "2 WORKSPACES",
    "UNLIMITED_POSTS",
    "UNLIMITED_COMMENTS",
    "UNLIMITED_CHANGELOGS",
  ],
  BUSINESS_TIER: [
    "PRIVATE_BOARD",
    "EDITABLE_FEERIO_URL",
    "EMAIL_NOTIFICATIONS",
    "CUSTOM_BRANDING",
    "INTERNAL_COMMENTS",
    "CUSTOM_CHANGELOG_LABELS",
    "ROLE_BASED_PERMISSIONS",
    "UNLIMITED_ADMINS",
    "5 BOARDS",
    "UNLIMITED_BOARDS",
    "2 WORKSPACES",
    "20 WORKSPACES",
    "UNLIMITED_POSTS",
    "UNLIMITED_COMMENTS",
    "UNLIMITED_CHANGELOGS",
  ],
};

export type TierData = {
  title: string;
  discount: number;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  whatYouGetHeading: string;
  primaryBtnLabel: string;
  basicBtnLabel: string;
  isPopular: boolean;
  features: string[];
  buttonActionUrl?: string;
  tier: TIER_NAMES;
};
