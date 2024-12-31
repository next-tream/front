import { NextRequest, NextResponse } from 'next/server';

import { auth } from './auth';

export const runtime = 'edge'; // Edge Runtime 활성화

export default auth(async (req: NextRequest) => {
	console.log('Middleware path:', req.nextUrl.pathname); // 경로 출력
	console.log('Middleware auth:', req.auth); // 인증 정보 출력

	if (!req.auth && req.nextUrl.pathname !== '/login') {
		const loginUrl = new URL('/login', req.nextUrl.origin);
		return NextResponse.redirect(loginUrl);
	}

	return NextResponse.next();
});

export const config = {
	matcher: ['*'], // 모든 경로에서 동작하도록 테스트
};
