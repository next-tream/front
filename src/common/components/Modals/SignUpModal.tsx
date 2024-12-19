import BaseModal from '@/common/components/Modals/BaseModal';
import TextInputsWrapper from '@/common/components/Wrapper/TextInputsWrapper';

export default function SignUpModal() {
	return (
		<BaseModal type="signUp">
			<TextInputsWrapper type="signUp" />
		</BaseModal>
	);
}
