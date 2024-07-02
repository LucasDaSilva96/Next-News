import { NextResponse } from 'next/server';

export function middleware() {
  // This is a middleware function, so it should call response.send() or return a response
  // object. It should not call response.end() or response.sendResponse().
  return NextResponse.next();
}

export const config = {
  matcher: '/news',
};
