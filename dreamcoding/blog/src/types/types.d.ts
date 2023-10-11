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
  next: Post | null;
  prev: Post | null;
}

interface BannerData {
  message: string;
  state: 'success' | 'error';
}

interface EmailData {
  from: string;
  subject: string;
  message: string;
}
