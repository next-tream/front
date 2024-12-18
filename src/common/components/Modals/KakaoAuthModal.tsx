import BaseModal from '@/common/components/Modals/BaseModal';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

interface IKakaoAuthModal {
	authenticationTime: number;
}

function formatSecondsToMinutes(seconds: number): [string, string] {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;

	const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

	return [String(minutes), formattedSeconds];
}

export default function KakaoAuthModal({ authenticationTime }: IKakaoAuthModal) {
	const time = formatSecondsToMinutes(authenticationTime);
	return (
		<BaseModal
			title="카카오톡 인증"
			description="인증 번호를 입력해 주세요. 인증번호 6자리는 카카오톡으로 전송됩니다."
			mainButtonLabel="다음"
			subButtonLabel="이전"
		>
			<div className="center flex-col gap-4">
				<div className="flex flex-col items-end gap-4">
					<div className="center relative w-full">
						<p className="text-sm font-semibold text-mainRed">
							{time[0]}:{time[1]}
						</p>
						<ArrowPathIcon className="absolute right-2 size-4 text-mainBlack" />
					</div>

					<InputOTP maxLength={6}>
						<InputOTPGroup>
							{new Array(6).fill('').map((_, index) => (
								<InputOTPSlot key={index} index={index} className="size-14" />
							))}
						</InputOTPGroup>
					</InputOTP>
				</div>
			</div>
		</BaseModal>
	);
}
