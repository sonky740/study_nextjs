'use client';

import { useState } from 'react';
import PostsGrid from './PostsGrid';
import Categories from './Categories';

interface Props {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <article className="flex mt-2">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </article>
  );
}
