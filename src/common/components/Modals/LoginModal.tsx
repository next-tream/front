import BaseModal from '@/common/components/Modals/BaseModal';
import BaseButton from '@/common/components/Buttons/BaseButton';
import TextInputsWrapper from '@/common/components/Wrapper/TextInputsWrapper';

export default function LoginModal() {
	return (
		<BaseModal type="login">
			<div className="flexCol gap-16">
				<div className="flexCol gap-6">
					<TextInputsWrapper type="login" />
					<BaseButton className="basePrimaryBtn">로그인</BaseButton>
					<div className="flex w-full items-center gap-2">
						<div className="border-lightGray h-0 w-1/2 border" />
						<p className="text-lightGray text-nowrap font-medium">또는</p>
						<div className="border-lightGray h-0 w-1/2 border" />
					</div>
					<div className="center gap-4">
						{new Array(3).fill('').map((_, index) => (
							<button key={index} className="bg-main size-12 rounded-full" />
						))}
					</div>
				</div>
				<div className="center gap-3">
					<p className="text-lightGray text-nowrap text-xs font-semibold">가입하기</p>
					<div className="border-lightGray h-6 w-0 border" />
					<p className="text-lightGray text-nowrap text-xs font-semibold">
						비밀번호 찾기
					</p>
				</div>
			</div>
		</BaseModal>
	);
}
