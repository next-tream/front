'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';
import { submitAction } from '@/common/actions/signupFormAction';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

export default function SignUpModal() {
	const router = useRouter();
	const [formData, setFormData] = useFormState(submitAction, {
		email: '',
		nickname: '',
		password: '',
		checkPassword: '',
		errors: {},
		result: false,
	});

	if (formData.result) {
		router.push(`/?modal=emailAuth&email=${formData.email}`);
	}

	return (
		<form action={setFormData}>
			<BaseModal type="signUp" onSubButtonClick={() => router.back()}>
				<TextInputsWrapper type="signUp" errors={formData.errors} />
			</BaseModal>
		</form>
	);
}
