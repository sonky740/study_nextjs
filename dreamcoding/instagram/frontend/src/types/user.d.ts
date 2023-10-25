interface User {
  name: string;
  username: string;
  email: string;
  image?: string;
}

type SimpleUser = Pick<User, 'username' | 'image'>;

interface DetailUser extends User {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
}
