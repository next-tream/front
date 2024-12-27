'use server';

import { schema } from '../zod/schema';
import { IFormData } from '../types/formValidation.interface';
import { ZodError } from 'zod';

export const submitAction = (prevState: IFormData, formData: FormData) => {
	try {
		const email = (formData.get('email') as string) || '';
		const nickName = (formData.get('nickName') as string) || '';
		const password = (formData.get('password') as string) || '';
		const tel = (formData.get('tel') as string) || '';

		const finalData = {
			email,
			nickName,
			password,
			tel,
		};

		schema.parse(finalData);

		return { ...finalData, errors: {} };
	} catch (error) {
		if (error instanceof ZodError) {
			const fieldErrors = error.errors.reduce(
				(acc, cur) => {
					console.log('acc', acc);
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
