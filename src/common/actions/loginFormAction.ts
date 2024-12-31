'use server';

import { loginSchema } from '../schema/loginSchema';
import { ILoginPrevState } from '../types/formValidation.interface';
import { ZodError } from 'zod';

export const submitAction = async (prevState: ILoginPrevState, formData: FormData) => {
	try {
		const email = (formData.get('email') as string) || '';
		const password = (formData.get('password') as string) || '';

		const finalData = {
			email,
			password,
		};

		loginSchema.parse(finalData);

		return { ...finalData, errors: {} };
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
