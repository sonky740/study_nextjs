import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <article className="text-center">
      <Image
      className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">Hi I&apos;m Sonky</h2>
      <h3 className="text-xl font-semibold">Front-end Developer</h3>
      <p>개발이 곧 취미인 사람</p>
      <Link href="/contact" className="inline-block bg-yellow-500 font-bold rounded-lg py-1 px-4 mt-2">Contact Me</Link>
    </article>
  );
}
