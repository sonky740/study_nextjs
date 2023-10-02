'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <>
      <p>{count}</p>
      <div className="flex gap-2">
        <button type="button" onClick={onIncrease}>
          increase
        </button>
        <button type="button" onClick={onDecrease}>
          decrease
        </button>
      </div>
    </>
  );
}
