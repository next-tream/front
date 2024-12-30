'use server';

/**
 * await fetch(`${process.env.BASE_URL}/code?is_password=${isPassword}`, {
			method: 'POST',
			headers: {
				accept: '',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				code: Number(code),
				email,
			}),
		});
 */
import { IEmailAuthPrevState } from '../types/formValidation.interface';
import { api } from '../configs/axios.config';

export const emailAuthentication = async ({ code, email, isPassword }: IEmailAuthPrevState) => {
	try {
		const response = await api.post(`/code?is_password=${isPassword}`, {
			code: Number(code),
			email,
		});

		if (response.status === 200) {
			console.log('이메일 인증 완료');
		}
	} catch (error) {
		alert(`이메일 인증 실패: ${error}`);
	}
};
