import { readFile } from 'fs/promises';
import path from 'path';

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await readFile(filePath, 'utf-8');
  const posts: Post[] = JSON.parse(data);

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => !post.featured);
}

export async function getPostData(filename: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${filename}.md`);
  const metadata = await getAllPosts();
  const postIndex = metadata.findIndex((post) => post.path === filename);

  if (postIndex === -1) {
    throw new Error('Post not found');
  }

  const content = await readFile(filePath, 'utf-8');
  return {
    ...metadata[postIndex],
    content,
  };
}
