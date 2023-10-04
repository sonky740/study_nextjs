import { getFeaturedPosts } from '@/api/posts';
import PostsGrid from '@/components/PostsGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  console.log(posts);
  return (
    <section>
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};