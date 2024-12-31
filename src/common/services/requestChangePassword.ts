'use server';

import { api } from '../configs/axios.config';
import { IPasswordChangePrevState } from '../types/formValidation.interface';

export const requestChangePassword = async ({ password, email }: IPasswordChangePrevState) => {
	try {
		const response = await api.put('/auth/change/password', {
			password,
			email,
		});

		if (response.status === 200) {
			console.log('비밀번호 변경 완료');
		}
	} catch (error) {
		alert(`비밀번호 변경 실패: ${error}`);
	}
};
