import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto, Noto_Sans_KR } from 'next/font/google';

const RobotoFont = Roboto({
  weight: ['400', '700'],
  style: 'normal',
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
});

const NotoSansKRFont = Noto_Sans_KR({
  weight: ['400', '700'],
  style: 'normal',
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sonky Blog',
    template: '%s | Sonky Blog'
  },
  description: 'Sonky Blog',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${RobotoFont.variable} ${NotoSansKRFont.variable}`}>
        <div className="flex flex-col h-full w-full max-w-screen-xl mx-auto">
          <Header />
          <main className="grow px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
