import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// middleware.ts이라는 파일을 만들어서 해야할텐데..? 아마두 ? -> 제가 테스트해보겠습니다.

export async function GET() {
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
