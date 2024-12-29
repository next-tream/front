import { IEmailAuthPrevState } from '../types/formValidation.interface';

export default async function emailAuthentication(data: IEmailAuthPrevState) {
	try {
		const response = await fetch(`${process.env.BASE_URL}/code`, {
			method: 'POST',
			headers: {
				accept: '*/*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				code: Number(data.code),
				email: data.email,
			}),
		});
		console.log(response);
		if (response.status === 200) {
			console.log('이메일 인증 완료');
		}
	} catch (error) {
		alert(`이메일 인증 실패: ${error}`);
	}
}
