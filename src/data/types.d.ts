
export interface User {
  id: number;
  image_url: string;
  nick_name: string;
  skin_type: string;
}

interface Reply {
  id: number;
  content: string;
  image_urls: string[];
  viewCount: number;
  upvoteCount: number;
  commentCount: number;
  category: {
    id: number;
    label: string;
  }
  user: User;
  createdAt: string;
}

interface Comment {
  id: number;
  content: string;
  image_urls: string[];
  viewCount: number;
  commentCount: number;
  upvoteCount: number;
  category: {
    id: number;
    label: string;
  }
  user: User;
  createdAt: string;
  replies?: Reply[];
  title?: string;
}

export type CommentData = Comment; 