'use server';

import { setCookie } from '@/common/utils/setCookie';

export async function setCookieAction(accessToken: string, sessionId: string) {
	setCookie('accessToken', accessToken, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 24 * 7,
	});
	setCookie('sessionId', sessionId, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 24 * 7,
	});
}
