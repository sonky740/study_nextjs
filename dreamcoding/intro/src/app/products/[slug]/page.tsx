import { getProducts, getProduct } from '@/service/products';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <h1>{product.name}</h1>;
}

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug}`,
  };
}

// 빠른 로딩을 위해 빌드 시점에 정적 경로를 생성합니다.
export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    params: {
      slug: product.id,
    },
  }));
}
