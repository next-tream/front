import BaseModal from '@/common/components/Modals/BaseModal';
import TextInputsWrapper from '@/common/components/Wrapper/TextInputsWrapper';

export default function PasswordChangeModal() {
	return (
		<BaseModal type="passwordChange">
			<TextInputsWrapper type="passwordChange" />
		</BaseModal>
	);
}
