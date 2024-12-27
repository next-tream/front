'use client';

import { useFormState } from 'react-dom';
import BaseModal from '@/common/components/Modals/BaseModal';
import { submitAction } from '@/common/validation/formValidation';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';

export default function SignUpModal() {
	const [formData, setFormData] = useFormState(submitAction, {
		email: '',
		nickName: '',
		password: '',
		tel: '',
		errors: {},
	});

	return (
		<form action={setFormData}>
			<BaseModal type="signUp">
				<TextInputsWrapper type="signUp" errors={formData.errors} />
			</BaseModal>
		</form>
	);
}
