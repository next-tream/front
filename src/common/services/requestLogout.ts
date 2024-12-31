'use server';

import api from '../configs/axios.config';

const requestLogout = async () => {
	try {
		const response = await api.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`);

		if (response.status === 204) {
			console.log('로그아웃 완료됐을껄?');
		}
	} catch (error) {
		console.log(`로그아웃 실패: ${error}`);
	}
};

export default requestLogout;
