'use server';

import api from '../configs/axios.config';

export const requestBroadcastingRoomInformation = async (roomId: string) => {
	try {
		const response = await api.get(`/room/${roomId}`);
		return response.data;
	} catch (error) {
		return error;
	}
};
