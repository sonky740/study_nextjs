import Image from 'next/image';
import Avatar from '../Avatar';
import HeartIcon from './icons/HeartIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import SmileIcon from './icons/SmileIcon';
import { parseDate } from '@/util/date';

interface Props {
  post: SimplePost;
}

export default function PostListCard({ post }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;

  return (
    <>
      <div>
        <Avatar image={userImage} highlight />
        <span>{username}</span>
      </div>
      <Image
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
      />
      <div>
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div>
        <p>{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
        <p>
          <strong>{username}</strong>
          <span>{text}</span>
        </p>
        <time>{parseDate(createdAt)}</time>
        <form>
          <SmileIcon />
          <input type="text" placeholder="Add a comment..." />
          <button>Post</button>
        </form>
      </div>
    </>
  );
}
