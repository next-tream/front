'use server';

import api from '../configs/axios.config';
import { IEmailAuthPrevState } from '../types/formValidation.interface';

export default async function requestAuthCode(data: IEmailAuthPrevState) {
	try {
		const response = await api.post(
			`${process.env.NEXT_PUBLIC_BASE_URL}/code/issue?is_password=${data.isPassword}`,
			{ email: data.email },
		);
		if (response.status === 200) {
			return false;
		}
	} catch (error) {
		alert(`인증 번호 요청 실패: ${error}`);
	}
}
