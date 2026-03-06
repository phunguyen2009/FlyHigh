import { auth } from './lib/auth';
import { NextResponse } from 'next/server';

/**
 * Middleware — protects /admin/* routes.
 * Unauthenticated users are redirected to /admin/login.
 * The login page itself is excluded from protection.
 */
export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Allow the login page and auth API routes through
  if (pathname === '/admin/login' || pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // If not authenticated, redirect to login
  if (!req.auth) {
    const loginUrl = new URL('/admin/login', req.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*'],
};
