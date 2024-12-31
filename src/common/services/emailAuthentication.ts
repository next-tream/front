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
	} catch (error) {
		alert(`이메일 인증 실패: ${error}`);
	}
};
