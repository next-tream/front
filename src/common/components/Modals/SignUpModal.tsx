import BaseModal from '@/common/components/Modals/BaseModal';
import SignUpInputWrapper from '@/common/components/Wrapper/SignUpInputsWrapper';

export default function SignUpModal() {
	return (
		<BaseModal title="회원가입" mainButtonLabel="다음" subButtonLabel="이전">
			<SignUpInputWrapper />
		</BaseModal>
	);
}
