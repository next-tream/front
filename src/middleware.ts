import type { NextRequest } from 'next/server';
import { getSession } from 'next-auth/react';

export async function middleware(req: NextRequest) {
	const session = await getSession();
	console.log('sess', session);
}

export const config = {
	matcher: ['/'],
};
