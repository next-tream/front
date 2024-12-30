import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email('이메일 형식이여야 합니다.'),
	password: z
		.string()
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
			'영문(대소문자)+숫자+특수문자 조합, 8~16자리',
		),
});
