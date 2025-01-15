import { IPrevState } from '../types/formValidation.interface';
import api from '../configs/axios.config';

export default async function registerUser({ nickname, password, email }: IPrevState) {
	try {
		const response = await api.post(`/auth/signup`, {
			nickname,
			password,
			email,
		});

		if (response.status === 201) {
			return true;
		}
	} catch (error: any) {
		return error.response.data;
	}
}
