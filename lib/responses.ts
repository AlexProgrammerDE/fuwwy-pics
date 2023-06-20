import { PostType } from "./types";

/**EXPORTING INTERFACES */

/*DESCRIBE STRUCTURE OF POSTRESPONSE OBJECT */
export interface PostResponse {
  postId: string;
  title: string;
  type: PostType;
  content?: string;
  images?: ImageResponse[];
  video?: VideoResponse;
  authorData: UserData;
  tags: string[];
  comments: CommentResponse[];
  timestamp: number;
  unlisted: boolean;
  likes: PostVote;
  dislikes: PostVote;
  hearts: PostVote;
}

export interface PostVote {
  value: number;
  voted: boolean;
}

export interface ImageResponse {
  id: string;
  extension: string;
  width: number;
  height: number;
}

export interface VideoResponse {
  id: string;
  extension: string;
  thumbnail: ImageResponse;
  width: number;
  height: number;
}

export interface CommentResponse {
  id: string;
  content: string;
  author: UserData;
}

export interface UserData {
  id: string;
  name: string;
  avatar: string;
  roles: string[];
}

export interface HealthResponse {
  [key: string]: {
    healthy: boolean;
    message: string;
    duration: number;
    timestamp: string;
  };
}
