import { type NextRequest, NextResponse } from 'next/server';
import { ACCESS_TOKEN } from './constants';

const privatePgaes = ['/mypage', '/write', '/match'];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get(ACCESS_TOKEN);

  if (!accessToken && privatePgaes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (pathname === '/login' && accessToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return response;
}

export const config = {
  matcher: ['/:path*'],
};
