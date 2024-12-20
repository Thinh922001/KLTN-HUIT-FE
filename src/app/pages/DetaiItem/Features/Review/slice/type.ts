export interface CommentBoxState {
  isShow: boolean;
  comment: string;
  images: string[];
  startRate: number;
  phone: string;
  fullName: string;
  stateBoxComment: string;
  isLoading: boolean;
  take: number;
  skip: number;
  total: number;
  comments: IComment[];
  loadingCreateCmt: boolean;
  commentIdChosen: number;
  reactType: 'LIKE';
  ratings: IRating[];
  avgRating: number;
  loadingRating: boolean;
}

export interface IOwner {
  id: number;
  aliasName: string;
}

export interface IRating {
  rating: number;
  ratingReaction: number;
}

export interface IComment {
  id: number;
  comment: string;
  totalReaction: number;
  rating: number;
  img?: string[];
  owner: IOwner;
  time: string;
  liked: boolean;
  isLoading: boolean;
}
