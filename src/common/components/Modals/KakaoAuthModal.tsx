'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import { IKakaoAuthModalProps } from '@/common/types/modal.interface';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Timer from '@/common/components/Modals/Timer';
import OtpInput from '@/common/components/Inputs/OtpInput';
import { useFormState } from 'react-dom';
import useOtpInput from '../Inputs/hooks/useOtpInput';
import { submitAction } from '@/common/validation/emailAuthFormValidation';
import { useSearchParams } from 'next/navigation';

export default function KakaoAuthModal({ authenticationTime }: IKakaoAuthModalProps) {
	const { otpCode, onChangeOtpHandle } = useOtpInput();
	const searchParams = useSearchParams();
	const email = searchParams.get('email') || '';

	const [formData, setFormData] = useFormState(submitAction, {
		code: otpCode,
		email: email,
	});

	console.log(formData);

	return (
		<form action={setFormData}>
			<BaseModal type="kakaoAuth">
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
}
