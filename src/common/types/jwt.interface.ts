import { z } from 'zod';

export const JwtPayloadSchema = z.object({
	id: z.number(),
	email: z.string().email(),
	nickname: z.string(),
	color: z.string(),
	role: z.number(),
	type: z.string(),
	iat: z.number(),
	exp: z.number(),
});

export type TJwtPayload = z.infer<typeof JwtPayloadSchema>;
