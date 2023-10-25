'use client';

import useSWR from 'swr';
import { PropagateLoader } from 'react-spinners';
import Link from 'next/link';
import Avatar from './Avatar';

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-scroll">
      {isLoading && <PropagateLoader size={8} color="#ff0000" />}
      {!isLoading && (!users || !users.length) && (
        <p>You don&apos;t have following</p>
      )}
      {users && users.length > 0 && (
        <ul className="w-full flex gap-2">
          {users.map(({ image, username }, index) => (
            <li key={`${username}-${index}`}>
              <Link
                href={`/user/${username}`}
                className="flex flex-col items-center w-20"
              >
                <Avatar image={image} highlight />
                <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                  {username}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
