import { ZodSchema } from 'zod';

const validateType = <T>(schema: ZodSchema<T>, value: unknown): value is T => {
	const result = schema.safeParse(value);
	return result.success;
};

export default validateType;
