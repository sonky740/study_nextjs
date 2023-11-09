'use client';
import { BounceLoader } from 'react-spinners';
import useSWR from 'swr';
import PostListCard from './ui/PostListCard';

export default function PostList() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>('/api/posts');

  return (
    <section>
      {isLoading && <BounceLoader size={8} color="#ff0000" />}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
