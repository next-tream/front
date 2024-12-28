import { NextResponse } from 'next/server';

export function middleware(req: Request) {
	const authHeader = req.headers.get('Authorization');
	const cookies = req.cookies.get('accessToken');
	console.log(cookies);
	console.log(authHeader);

	if (!authHeader && !cookies) {
		return NextResponse.redirect(new URL('/login', req.url));
	}

	if (!authHeader && cookies) {
		const response = NextResponse.next();
		response.headers.set('Authorization', `Bearer ${cookies}`);
		return response;
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		{
			source: '/api/*',
			locale: false,
			missing: [{ type: 'header', key: 'Authorization' }],
		},
	],
};
