'use client';

import { signOut } from 'next-auth/react';
import api from '../configs/axios.config';

const requestLogout = async () => {
	try {
		await signOut({ callbackUrl: '/' });
		const response = await api.delete('/auth/logout');

		if (response.status === 204) {
			console.log('로그아웃왓료');
			return true;
		}
	} catch (error) {
		console.log(`로그아웃 실패: ${error}`);
	}
};

export default requestLogout;
