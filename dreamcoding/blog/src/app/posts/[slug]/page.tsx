import Image from 'next/image';
import { getPostData } from '@/api/posts';
import PostContent from '@/components/PostContent';

interface Props {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <article className="rounded-xl overflow-hidden bg-gray-100 shadow-lg">
      <Image
        className="w-full h-1/5 max-h-[400px]"
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
}
