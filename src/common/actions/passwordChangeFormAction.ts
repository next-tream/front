import { ZodError } from 'zod';
import { changePasswordSchema } from '../schema/changePasswordSchema';
import { IPasswordChangePrevState } from '../types/formValidation.interface';
import { requestChangePassword } from '../services/requestChangePassword';

export const submitAction = async (prevState: IPasswordChangePrevState, formData: FormData) => {
	try {
		const password = (formData.get('password') as string) || '';
		const checkPassword = (formData.get('checkPassword') as string) || '';
		const email = prevState.email;

		changePasswordSchema.parse({ password, checkPassword });
		requestChangePassword({ password, email });

		return { password, checkPassword, email, errors: {} };
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
