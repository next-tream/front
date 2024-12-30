'use client';

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import BaseModal from '@/common/components/Modals/BaseModal';
import { IKakaoAuthModalProps } from '@/common/types/modal.interface';
import OtpInput from '@/common/components/Inputs/OtpInput';
import Timer from '@/common/components/Modals/Timer';
import { submitAction } from '@/common/actions/emailAuthFormAction';
import { useFormState } from 'react-dom';
import useOtpInput from '../Inputs/hooks/useOtpInput';

export default function KakaoAuthModal({ authenticationTime, email = '' }: IKakaoAuthModalProps) {
	const { otpCode, onChangeOtpHandle } = useOtpInput();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [formData, setFormData] = useFormState(submitAction, {
		code: otpCode,
		email,
	});

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
