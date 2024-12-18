import BaseModal from '@/common/components/Modals/BaseModal';
import SignUpInputWrapper from '@/common/components/Wrapper/SignUpInputsWrapper';

export default function SignUpModal() {
	return (
		<BaseModal type="signUp">
			<SignUpInputWrapper />
		</BaseModal>
	);
}
