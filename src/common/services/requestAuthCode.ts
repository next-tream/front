import { IEmailAuthPrevState } from '../types/formValidation.interface';

export default async function requestAuthCode(data: IEmailAuthPrevState) {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/code/issue?is_password=${data.isPassword}`,
			{
				method: 'POST',
				headers: {
					accept: '*/*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: data.email,
				}),
			},
		);
		if (response.status === 200) {
			console.log('인증 번호 요청 완료');
			return false;
		}
	} catch (error) {
		alert(`인증 번호 요청 실패: ${error}`);
	}
}
