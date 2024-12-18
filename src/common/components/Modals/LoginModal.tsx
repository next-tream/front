import BaseModal from '@/common/components/Modals/BaseModal';
import TextInput from '@/common/components/Inputs/TextInput';
import BaseButton from '@/common/components/Buttons/BaseButton';

export default function LoginModal() {
	return (
		<BaseModal title="Nextream">
			<div className="flex flex-col gap-16">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-4">
						<TextInput type="text" placeholder="이메일을 입력해 주세요." />
						<TextInput type="password" placeholder="비밀번호를 입력해 주세요." />
					</div>

					<BaseButton className="roundBtn basePrimaryBtn">로그인</BaseButton>

					<div className="flex w-full items-center gap-2">
						<div className="h-0 w-1/2 border border-lightGray" />
						<p className="text-nowrap font-medium text-lightGray">또는</p>
						<div className="h-0 w-1/2 border border-lightGray" />
					</div>

					<div className="center gap-4">
						{new Array(3).fill('').map((_, index) => (
							<button key={index} className="size-12 rounded-full bg-main" />
						))}
					</div>
				</div>
				<div className="center gap-3">
					<p className="text-nowrap text-xs font-semibold text-lightGray">가입하기</p>
					<div className="h-6 w-0 border border-lightGray" />
					<p className="text-nowrap text-xs font-semibold text-lightGray">
						비밀번호 찾기
					</p>
				</div>
			</div>
		</BaseModal>
	);
}
