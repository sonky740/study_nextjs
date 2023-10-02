import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware');

  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('middle - redirect');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

export const config = {
  matcher: ['/products/:path+'],
};
