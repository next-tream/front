import BaseModal from '@/common/components/Modals/BaseModal';
import { IKakaoAuthModalProps } from '@/common/types/modal.interface';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Timer from '@/common/components/Timer';
import OtpInput from '@/common/components/Inputs/OtpInput';

export default function KakaoAuthModal({ authenticationTime }: IKakaoAuthModalProps) {
	return (
		<BaseModal type="kakaoAuth">
			<div className="flexColCenter gap-4">
				<div className="flexCol items-end gap-4">
					<div className="center relative w-full">
						<Timer time={authenticationTime} />
						<ArrowPathIcon className="absolute right-2 top-0 size-4 text-mainBlack" />
					</div>
					<OtpInput />
				</div>
			</div>
		</BaseModal>
	);
}
