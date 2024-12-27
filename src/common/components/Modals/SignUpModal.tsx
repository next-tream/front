'use client';

import { useFormState } from 'react-dom';
import BaseModal from '@/common/components/Modals/BaseModal';
import { submitAction } from '@/common/validation/formValidation';
import { IFormData } from '@/common/types/formValidation.interface';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';

export default async function SignUpModal() {
	const [formData, setFormData] = useFormState<IFormData>(submitAction, {
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
