'use client';

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import BaseModal from '@/common/components/Modals/BaseModal';
import { IEmailAuthModalProps } from '@/common/types/modal.interface';
import OtpInput from '@/common/components/Inputs/OtpInput';
import Timer from '@/common/components/Modals/Timer';
import { submitAction } from '@/common/actions/emailAuthFormAction';
import { useFormState } from 'react-dom';
import useOtpInput from '../Inputs/hooks/useOtpInput';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

export const EmailAuthModal = ({ authenticationTime, email = '' }: IEmailAuthModalProps) => {
	const { otpCode, onChangeOtpHandle } = useOtpInput();
	const router = useRouter();
	const { toast } = useToast();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [formData, setFormData] = useFormState(submitAction, {
		code: otpCode,
		email,
		result: false,
	});

	useEffect(() => {
		if (formData.result) {
			toast({ title: '🥳 회원가입을 축하드립니다!! 🎉', duration: 1000 });
			router.push('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formData.result]);

	return (
		<form action={setFormData}>
			<BaseModal type="emailAuth" onSubButtonClick={() => router.back()}>
				<div className="flexColCenter gap-4">
					<div className="flexCol items-end gap-4">
						<div className="center relative w-full">
							<Timer time={authenticationTime} />
							<ArrowPathIcon className="absolute right-2 top-0 size-4 text-mainBlack" />
						</div>
						<OtpInput
							onChangeOtpHandle={onChangeOtpHandle}
							otpCode={otpCode}
							name="code"
						/>
					</div>
				</div>
			</BaseModal>
		</form>
	);
};
