'use server';

import { schema } from '../zod/schema';
import { IFormData } from '../types/formValidation.interface';

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
		if (error) {
			const fieldErrors = error.errors.reduce((acc, curr) => {
				const field = curr.path[0];
				acc[field] = curr.message;
				return acc;
			}, {});
			return { ...prevState, errors: fieldErrors };
		}
		return { ...prevState };
	}
};
