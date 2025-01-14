'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';
import { submitAction } from '@/common/actions/signupFormAction';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

export default function SignUpModal() {
	const router = useRouter();
	const { toast } = useToast();
	const [formData, setFormData] = useFormState(submitAction, {
		email: '',
		nickname: '',
		password: '',
		checkPassword: '',
		errors: {},
		result: false,
	});

	useEffect(() => {
		if (formData.result.statusCode === 409) {
			toast({ title: `${formData.result.message} 👯`, duration: 2000 });
		} else if (formData.result) {
			router.push(`/?modal=emailAuth&email=${formData.email}`);
		}
	}, [formData.result]);

	return (
		<form action={setFormData}>
			<BaseModal type="signUp" onSubButtonClick={() => router.back()}>
				<TextInputsWrapper type="signUp" errors={formData.errors} />
			</BaseModal>
		</form>
	);
}
