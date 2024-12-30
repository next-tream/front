import { z } from 'zod';

export const schema = z.object({
	email: z.string().email('이메일 형식이여야 합니다.'),
	nickName: z.string().min(1, { message: '닉네임을 입력해 주세요.' }),
	password: z
		.string()
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
			'영문(대소문자)+숫자+특수문자 조합, 8~16자리',
		),
	tel: z.string().regex(/^\d{10,11}$/, '전화번호는 숫자로만 구성된 10~11자리여야 합니다.'),
});
