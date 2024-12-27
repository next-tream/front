import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const accessToken = cookies().get('accessToken');
	return NextResponse.json(
		{
			success: true,
		},
		{
			headers: {
				'Set-Cookie': `accessToken=${accessToken}; Path=/; HttpOnly; Secure; SameSite=Strict`,
			},
		},
	);
}
