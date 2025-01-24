'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';
import { submitAction } from '@/common/actions/passwordChangeFormAction';
import { toast } from '@/common/hooks/useToast';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

export default function PasswordChangeModal({ email = '' }: { email?: string }) {
	const router = useRouter();
	const [formData, setFormData] = useFormState(submitAction, {
		email,
		password: '',
		checkPassword: '',
		errors: {},
		result: false,
	});

	useEffect(() => {
		if (formData.result) {
			toast({
				title: '비밀번호 변경 완료!! ✅',
			});
			router.push('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formData.result]);

	return (
		<form action={setFormData}>
			<BaseModal type="passwordChange">
				<TextInputsWrapper type="passwordChange" errors={formData.errors} />
			</BaseModal>
		</form>
	);
}
