'use server';

import { setCookie } from '@/common/utils/setCookie';

export async function setCookieAction(accessToken: string, sessionId: string, connectSid: string) {
	setCookie('accessToken', accessToken, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 1,
	});
	setCookie('sessionId', sessionId, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 24 * 7,
	});
	setCookie('connect.sid', connectSid, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 24 * 7,
	});
}
