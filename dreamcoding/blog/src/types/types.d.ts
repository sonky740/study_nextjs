interface Post {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}

interface PostData extends Post {
  content: string;
}