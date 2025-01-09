'use server';

import { IEmailAuthPrevState } from '../types/formValidation.interface';
import { emailAuthentication } from '../services/emailAuthentication';

export const submitAction = async (prevState: IEmailAuthPrevState, formData: FormData) => {
	const code = (formData.get('code') as string) || '';
	const email = prevState.email;
	const isPassword = false;

	const result = await emailAuthentication({ code, email, isPassword });
	return { code, email, result };
};
