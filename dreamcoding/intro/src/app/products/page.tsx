import Link from 'next/link';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';

// export const revalidate = 0;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1 className="font-bold text-2xl">제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
