import BaseModal from '@/common/components/Modals/BaseModal';
import PasswordChangeInputsWrapper from '@/common/components/Wrapper/PasswordChangeInputsWrapper';

export default function PasswordChangeModal() {
	return (
		<BaseModal
			title="새 비밀번호 입력"
			description="새로운 비밀번호를 입력해 주세요."
			mainButtonLabel="변경"
			subButtonLabel="이전"
		>
			<PasswordChangeInputsWrapper />
		</BaseModal>
	);
}
