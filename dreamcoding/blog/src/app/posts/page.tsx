import { getAllPosts } from "@/api/posts";
import FilterablePosts from "@/components/FilterablePosts";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'Sonky blog All Posts',
}

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))];
  console.log(categories);

  return (
    <FilterablePosts posts={posts} categories={categories} />
  );
};