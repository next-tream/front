'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';
import { useFormState } from 'react-dom';
import { submitAction } from '@/common/actions/passwordChangeFormAction';

export default function PasswordChangeModal({ email = '' }: { email?: string }) {
	const [formData, setFormData] = useFormState(submitAction, {
		email,
		password: '',
		checkPassword: '',
		errors: {},
	});

	return (
		<form action={setFormData}>
			<BaseModal type="passwordChange">
				<TextInputsWrapper type="passwordChange" errors={formData.errors} />
			</BaseModal>
		</form>
	);
}
