import { notFound } from 'next/navigation';

export default function PantsPage({ params }: Props) {
  if (params.slug === 'nothing') {
    notFound();
  }

  return <h1>{params.slug}</h1>;
}

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug}`,
  };
}

// 빠른 로딩을 위해 빌드 시점에 정적 경로를 생성합니다.
export function generateStaticParams() {
  const products = ['pants', 'skirt'];

  return products.map((product) => ({
    params: {
      slug: product,
    },
  }));
}
