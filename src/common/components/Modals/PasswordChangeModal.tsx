import BaseModal from '@/common/components/Modals/BaseModal';
import TextInput from '@/common/components/Inputs/TextInput';

export default function PasswordChangeModal() {
	return (
		<BaseModal
			title="새 비밀번호 입력"
			description="새로운 비밀번호를 입력해 주세요."
			mainButtonLabel="변경"
			subButtonLabel="이전"
		>
			<div className="flex flex-col gap-4">
				<TextInput title="새 비밀번호" placeholder="비밀번호를 입력해 주세요." />
				<TextInput title="새 비밀번호 확인" placeholder="새 비밀번호를 입력해 주세요." />
			</div>
		</BaseModal>
	);
}
