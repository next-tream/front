'use server';
// ssr에서의 데이터패칭은 무조건 fetch가야합니다
// csr에서의 데이터 패칭은 axios 맞는데

import api from '../configs/axios.config';

export const requestBroadcastingRoomInformation = async (roomId: string) => {
	try {
		const response = await api.get(`/room/${roomId}`);
		return response.data;
	} catch (error) {
		return error;
	}
};
