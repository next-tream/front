import api from '../configs/axios.config';
import { IPrevState } from '../types/formValidation.interface';

export default async function registerUser(data: IPrevState) {
	try {
		const response = await api.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, {
			nickname: data.nickName,
			password: data.password,
			email: data.email,
		});

		if (response.status === 201) {
			return true;
		}
	} catch (error) {
		alert(`회원가입 실패: ${error}`);
	}
}
