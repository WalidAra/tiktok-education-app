// data type

type CategoryProp = {
  id: number;
  topic: string;
};

type FollowerProp = {
  _id: string;
};

type LikesProp = {
  like_id: number;
  likedBy: string;
  video_id: string;
};

type UserProp = {
  _id: string;
  fullName: string;
  userName: string;
  email: string;
  password: string;
  pfpUrl: string;
  followers: FollowerProp[];
  following: FollowerProp[];
  joined: string;
  favCategories: string[];
};

type CommentProp = {
  comment_id: string;
  usercomment: string;
  commenter_id: string;
  video_id: string;
};

type VideoProp = {
  video_id: string;
  url: string;
  title: string;
  category_id: number;
  description: string;
  likes_count: number;
  poster_id: string;
  poster: UserProp;
  comments: CommentProp[];
};

// elements types

type ChildrenProps = {
  children: React.ReactNode;
};


// fetch types 

type SignUpProps = {
  fullName: string;
  userName: string;
  email: string;
  password: string;
};

type VidDetails = {
  title: string;
  description: string;
  url: string;
  likes_count: number;
  poster_id: string;
  category_id: number;
};

type SearchProps = {
  finalVids: VideoProp[];
  users: UserProp[];
};