'use server';

import { IEmailAuthPrevState } from '../types/formValidation.interface';
import { api } from '../configs/axios.config';

export const emailAuthentication = async ({ code, email, isPassword }: IEmailAuthPrevState) => {
	try {
		const response = await api.post(`/code?is_password=${isPassword}`, {
			code: Number(code),
			email,
		});

		if (response.status === 200) {
			return true;
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.log(`이메일 인증 실패: ${error}`);
		throw new Error(error.response.data.message);
	}
};
