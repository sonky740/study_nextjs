'use client';

import { useRouter } from 'next/navigation';

export default function GoProductsButton() {
  const router = useRouter();

  const goProducts = () => {
    router.push('/products');
  };

  return (
    <button type="button" onClick={goProducts}>
      제품 페이지로 이동
    </button>
  );
}
