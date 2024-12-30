import BaseModal from '@/common/components/Modals/BaseModal';
import BaseButton from '@/common/components/Buttons/BaseButton';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';
import KakaoLoginButton from '../Buttons/KakaoLoginButton';
import NaverLoginButton from '../Buttons/NaverLoginButton';
import Link from 'next/link';

export default function LoginModal() {
	return (
		<BaseModal type="login">
			<div className="flexCol gap-16">
				<div className="flexCol gap-6">
					<TextInputsWrapper type="login" />
					<BaseButton className="basePrimaryBtn">로그인</BaseButton>
					<div className="flex w-full items-center gap-2">
						<div className="h-0 w-1/2 border border-lightGray" />
						<p className="text-nowrap font-medium text-lightGray">또는</p>
						<div className="h-0 w-1/2 border border-lightGray" />
					</div>
					<div className="center gap-4">
						{new Array(1).fill('').map((_, index) => (
							<button key={index} className="size-12 rounded-full bg-main" />
						))}
						<NaverLoginButton />
						<KakaoLoginButton />
					</div>
				</div>
				<div className="center gap-3">
					<Link href="/signup">
						<p className="cursor-pointer text-nowrap text-xs font-semibold text-lightGray">
							가입하기
						</p>
					</Link>
					<div className="h-6 w-0 border border-lightGray" />
					<p className="cursor-pointer text-nowrap text-xs font-semibold text-lightGray">
						비밀번호 찾기
					</p>
				</div>
			</div>
		</BaseModal>
	);
}
