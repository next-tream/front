import BaseModal from '@/common/components/Modals/BaseModal';
import TextInputsWrapper from '@/common/components/Inputs/TextInputsWrapper';

export default function SignUpModal() {
	return (
		<BaseModal type="signUp">
			<TextInputsWrapper type="signUp" />
		</BaseModal>
	);
}
