'use server';

import { signupSchema } from '../schema/signupSchema';
import { IFormData } from '../types/formValidation.interface';
import { ZodError } from 'zod';
import registerUser from '../services/registerUser';

export const submitAction = async (prevState: IFormData, formData: FormData) => {
	try {
		const email = (formData.get('email') as string) || '';
		const nickName = (formData.get('nickName') as string) || '';
		const password = (formData.get('password') as string) || '';
		const checkPassword = (formData.get('tel') as string) || '';

		const finalData = {
			email,
			nickName,
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
