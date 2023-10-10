import Image from 'next/image';
import { getPostData } from '@/api/posts';
import PostContent from '@/components/PostContent';
import AdjacentPostCard from '@/components/AdjacentPostCard';

interface Props {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { path, title, prev, next } = post;

  return (
    <article className="rounded-xl overflow-hidden bg-gray-100 shadow-lg">
      <Image
        className="w-full h-1/5 max-h-[400px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
        priority
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && (
          <AdjacentPostCard post={prev} type="prev" />
        )}
        {next && (
          <AdjacentPostCard post={next} type="next" />
        )}
      </section>
    </article>
  );
}
