import BaseModal from '@/common/components/Modals/BaseModal';
import TextInput from '@/common/components/Inputs/TextInput';

export default function PhoneVerificationModal() {
	return (
		<BaseModal
			title="비밀번호 변경"
			subButtonLabel="이전"
			mainButtonLabel="다음"
			description="전화번호를 입력해 주세요. 비밀번호 변경을 위한 인증번호는 카카오톡으로 전송됩니다."
		>
			<TextInput placeholder="전화번호를 입력해 주세요." />
		</BaseModal>
	);
}
