'use client';

import { useFormState } from 'react-dom';
import BaseModal from '@/common/components/Modals/BaseModal';
import { submitAction } from '@/common/validation/formValidation';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';
import { useRouter } from 'next/navigation';

export default function SignUpModal() {
	const router = useRouter();
	const [formData, setFormData] = useFormState(submitAction, {
		email: '',
		nickName: '',
		password: '',
		tel: '',
		errors: {},
		result: false,
	});

	if (formData.result) {
		router.push('/kakaoAuth');
	}

	return (
		<form action={setFormData}>
			<BaseModal type="signUp">
				<TextInputsWrapper type="signUp" errors={formData.errors} />
			</BaseModal>
		</form>
	);
}
