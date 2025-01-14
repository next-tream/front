import { signIn } from 'next-auth/react';

export const signInForCredential = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	const res = await signIn('credentials', {
		email,
		password,
	});
};
