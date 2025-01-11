'use server';

import { setCookie } from '@/common/utils/setCookie';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const POST = async () => {
	const cookiesStore = cookies();
	const cookieHeader = cookiesStore
		.getAll()
		.map(({ name, value }) => `${name}=${value}`)
		.join('; ');

	const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/reissue`, {
		method: 'POST',
		headers: {
			Cookie: cookieHeader,
		},
	});

	const data = await response.json();

	if (!data.accessToken)
		return NextResponse.json({
			statusCode: `${data.statusCode}`,
			ErrorMessage: `${data.message}`,
			message: '토큰을 재발급하지 못했습니다.',
		});

	setCookie('accessToken', data.accessToken, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 1,
	});

	return NextResponse.json({
		accessToken: data.accessToken,
		message: '토큰이 재발급 되었습니다.',
	});
};
