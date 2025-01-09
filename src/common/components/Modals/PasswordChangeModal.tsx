'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';
import { useFormState } from 'react-dom';
import { submitAction } from '@/common/actions/passwordChangeFormAction';
import { useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
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
		toast({
			title: formData.result ? '비밀번호 변경 완료!! ✅' : '비밀번호 변경 실패!! ❌',
		});
		router.push('/');
	}, [formData.result]);

	return (
		<form action={setFormData}>
			<BaseModal type="passwordChange">
				<TextInputsWrapper type="passwordChange" errors={formData.errors} />
			</BaseModal>
		</form>
	);
}
