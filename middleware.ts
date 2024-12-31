import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { match } from 'path-to-regexp';
// import { getSession } from '@/serverActions/auth'

const matchersForAuth = ['/myaccount/:path', '/users/:path'];
const matchersForSignIn = ['/signup/:path', '/signin/:path'];

export async function middleware(request: NextRequest) {
	console.log('path', request.nextUrl.pathname);
	return NextResponse.next();
}

function isMatch(pathname: string, urls: string[]) {
	return urls.some((url) => !!match(url)(pathname));
}
