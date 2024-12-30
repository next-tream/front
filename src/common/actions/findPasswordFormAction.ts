'use server';

import { ZodError } from 'zod';
import { IEmailAuthPrevState } from '../types/formValidation.interface';
import requestAuthCode from '../services/requestAuthCode';
import { findPasswordSchema } from '../schema/findPasswordSchema';
import { emailAuthentication } from '../services/emailAuthentication';

export const submitAction = async (prevState: IEmailAuthPrevState, formData: FormData) => {
	try {
		const email = (formData.get('email') as string) || '';
		const code = (formData.get('code') as string) || '';
		const hasCodeField = formData.has('code');

		if (!hasCodeField) {
			findPasswordSchema.parse({ email });
			const result = await requestAuthCode({ isPassword: true, email });
			return { code, email, isPassword: true, errors: {}, result };
		} else {
			const result = await emailAuthentication({ code, email, isPassword: true });
			return { code, email, isPassword: true, errors: {}, result };
		}
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
