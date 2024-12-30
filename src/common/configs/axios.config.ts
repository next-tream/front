import axios, { AxiosInstance } from 'axios';

import { getSession } from 'next-auth/react';

export const api: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	async (config) => {
		const session = await getSession();

		if (session?.accessToken) {
			config.headers.Authorization = `Bearer ${session.accessToken}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default api;
