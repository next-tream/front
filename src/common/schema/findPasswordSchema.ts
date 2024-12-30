import { z } from 'zod';

export const findPasswordSchema = z.object({
	email: z.string().email('이메일 형식이여야 합니다.'),
});
