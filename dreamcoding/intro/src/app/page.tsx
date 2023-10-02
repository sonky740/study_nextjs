import os from 'os';
import Counter from '@/components/Counter';

export default function Home() {
  console.log(os.hostname());

  return (
    <>
      <h1>Homepage</h1>
      <Counter />
    </>
  );
}
