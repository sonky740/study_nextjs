import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2">
      <Link href="/">
        <h1 className="text-3xl font-bold">Sonky&apos;s Blog</h1>
      </Link>
      <nav className="flex gap-2">
        <Link href="/about">About</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
