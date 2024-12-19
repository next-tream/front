import BaseModal from '@/common/components/Modals/BaseModal';
import { IKakaoAuthModalProps } from '@/common/types/modal.interface';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Timer from '@/common/components/Timer';

export default function KakaoAuthModal({ authenticationTime }: IKakaoAuthModalProps) {
	return (
		<BaseModal type="kakaoAuth">
			<div className="flexColCenter gap-4">
				<div className="flexCol items-end gap-4">
					<div className="center relative w-full">
						<Timer time={authenticationTime} />
						<ArrowPathIcon className="text-mainBlack absolute right-2 top-0 size-4" />
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
