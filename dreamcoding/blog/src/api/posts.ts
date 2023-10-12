import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

// 한 번 렌더링된 데이터는 캐싱하여 재사용
// fetch()를 사용할 땐 굳이 cache로 래핑할 필요 없음.
export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await readFile(filePath, 'utf-8');
  const posts: Post[] = JSON.parse(data);

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
});

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
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === filename);

  if (!post) throw new Error('Post not found');

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null; // 최신글이 맨 앞에 있으므로 index - 1
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await readFile(filePath, 'utf-8');
  return {
    ...post,
    content,
    next,
    prev,
  };
}
