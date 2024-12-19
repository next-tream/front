import BaseModal from '@/common/components/Modals/BaseModal';
import TextInput from '@/common/components/Inputs/TextInput';

export default function PhoneVerificationModal() {
	return (
		<BaseModal type="phoneVerification">
			<TextInput placeholder="전화번호를 입력해 주세요." />
		</BaseModal>
	);
}
