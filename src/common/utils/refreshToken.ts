'use client';

import { useSession } from 'next-auth/react';

const useRefreshToken = () => {
	const { data: session, update } = useSession();

	const refreshToken = async () => {
		const response = await fetch('/api/auth/reissue', { method: 'POST' });
		const data = await response.json();

		if (response.status === 200) {
			await update({ ...session, accessToken: data.accessToken });
			return { ok: true, message: '토큰 재발급을 성공했습니다.' };
		} else {
			return { ok: false, statusCode: response.status, message: '토큰 발급을 실패했습니다.' };
		}
	};

	return {
		refreshToken,
	};
};

export default useRefreshToken;
