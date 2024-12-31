import { z } from 'zod';

export const signupSchema = z
	.object({
		email: z.string().email('이메일 형식이여야 합니다.'),
		nickName: z.string().min(1, { message: '닉네임을 입력해 주세요.' }),
		password: z
			.string()
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
				'영문(대소문자)+숫자+특수문자 조합, 8~16자리',
			),
		checkPassword: z.string().min(1, { message: '비밀번호를 한 번 더 입력해 주세요.' }),
	})
	.superRefine(({ checkPassword, password }, ctx) => {
		if (checkPassword !== password) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: '비밀번호가 일치하지 않습니다.',
				path: ['checkPassword'],
			});
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: '비밀번호가 일치하지 않습니다.',
				path: ['password'],
			});
		}
	});
