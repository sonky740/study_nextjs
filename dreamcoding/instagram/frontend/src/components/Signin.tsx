'use client';

import type { ClientSafeProvider } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import ColorButton from './ui/ColorButton';

interface Props {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`Sign in with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size="large"
        />
      ))}
    </>
  );
}
