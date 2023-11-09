interface Comment {
  comment: string;
  username: string;
  image: string;
}

type SimplePost = Omit<FullPost, 'comments'> & { comments: number }

interface FullPost {
  id: number;
  username: string;
  userImage: string;
  image: string;
  text: string;
  createdAt: string;
  likes: string[];
  comments: Comment[];
}
