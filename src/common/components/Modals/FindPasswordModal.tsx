'use client';

import { useEffect, useState } from 'react';

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import BaseModal from '@/common/components/Modals/BaseModal';
import { IEmailAuthModalProps } from '@/common/types/modal.interface';
import OtpInput from '@/common/components/Inputs/OtpInput';
import TextInputsWrapper from '../Inputs/TextInputsWrapper';
import Timer from '@/common/components/Modals/Timer';
import requestAuthCode from '@/common/services/requestAuthCode';
import { submitAction } from '@/common/actions/findPasswordFormAction';
import { useFormState } from 'react-dom';
import useOtpInput from '../../hooks/useOtpInput';
import { useRouter } from 'next/navigation';
import { useToast } from '@/common/hooks/useToast';

export const FindPasswordModal = ({ authenticationTime }: IEmailAuthModalProps) => {
	const router = useRouter();
	const { otpCode, onChangeOtpHandle } = useOtpInput();
	const { toast } = useToast();
	const [timerKey, setTimerKey] = useState(0);

	const [formData, setFormData] = useFormState(submitAction, {
		code: otpCode,
		email: '',
		isPassword: false,
		errors: {},
		result: false,
	});

	if (formData.result) {
		router.push(`/?modal=passwordChange&email=${formData.email}`);
	}

	const email = formData.email;

	const reRequestAuthCode = async () => {
		setTimerKey((prev) => prev + 1);
		const result = await requestAuthCode({ isPassword: true, email });
		if (!result) {
			toast({ title: '이메일 인증코드 재발급 완료!! 🙌🏻', duration: 1000 });
		}
	};

	useEffect(() => {
		if (formData.code === 'error') {
			toast({ title: '인증 코드가 일치하지 않아요!! 😥', duration: 1000 });
		}
	}, [formData.code]);

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
									<Timer key={timerKey} time={authenticationTime} />
									<ArrowPathIcon
										onClick={reRequestAuthCode}
										className="absolute right-2 top-0 size-4 text-mainBlack"
									/>
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
