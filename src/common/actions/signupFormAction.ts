'use server';

import { IFormData } from '../types/formValidation.interface';
import { ZodError } from 'zod';
import registerUser from '../services/registerUser';
import { signupSchema } from '../schema/signupSchema';

export const submitAction = async (prevState: IFormData, formData: FormData) => {
	try {
		const email = (formData.get('email') as string) || '';
		const nickname = (formData.get('nickname') as string) || '';
		const password = (formData.get('password') as string) || '';
		const checkPassword = (formData.get('checkPassword') as string) || '';

		const finalData = {
			email,
			nickname,
			password,
			checkPassword,
		};

		signupSchema.parse(finalData);
		const result = await registerUser(finalData);

		return { ...finalData, errors: {}, result };
	} catch (error) {
		if (error instanceof ZodError) {
			const fieldErrors = error.errors.reduce(
				(acc, cur) => {
					const field = cur.path[0];
					acc[field] = cur.message;
					return acc;
				},
				{} as Record<string, string>,
			);
			return { ...prevState, errors: fieldErrors };
		}
		return { ...prevState };
	}
};
