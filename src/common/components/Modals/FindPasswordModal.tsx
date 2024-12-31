'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import { IEmailAuthModalProps } from '@/common/types/modal.interface';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Timer from '@/common/components/Modals/Timer';
import OtpInput from '@/common/components/Inputs/OtpInput';
import { useFormState } from 'react-dom';
import useOtpInput from '../Inputs/hooks/useOtpInput';
import TextInputsWrapper from '../Inputs/TextInputsWrapper';
import { submitAction } from '@/common/actions/findPasswordFormAction';
import { useRouter } from 'next/navigation';

export const FindPasswordModal = ({ authenticationTime }: IEmailAuthModalProps) => {
	const router = useRouter();
	const { otpCode, onChangeOtpHandle } = useOtpInput();

	const [formData, setFormData] = useFormState(submitAction, {
		code: otpCode,
		email: '',
		isPassword: false,
		errors: {},
		result: false,
	});

	if (formData.result) {
		router.push(`/password/change?email=${formData.email}`);
	}

	return (
		<form action={setFormData}>
			<BaseModal
				type={formData.isPassword ? 'inputAuthCode' : 'sendAuthCode'}
				onSubButtonClick={() => router.back()}
			>
				<div className="flexCol gap-4">
					<TextInputsWrapper type="sendAuthCode" errors={formData.errors} />
					{formData.isPassword && (
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
					)}
				</div>
			</BaseModal>
		</form>
	);
};
