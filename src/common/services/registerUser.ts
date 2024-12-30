import { IPrevState } from '../types/formValidation.interface';

export default async function registerUser(data: IPrevState) {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accept: 'application/json',
			},
			body: JSON.stringify({
				nickname: data.nickName,
				password: data.password,
				email: data.email,
			}),
		});
		console.log(response);
		if (response.status === 201) {
			return true;
		}
	} catch (error) {
		alert(`회원가입 실패: ${error}`);
	}
}
