import BaseModal from '@/common/components/Modals/BaseModal';
import PasswordChangeInputsWrapper from '@/common/components/Wrapper/PasswordChangeInputsWrapper';
import MODAL_CONSTANTS from '@/common/constants/modal.const';

export default function PasswordChangeModal() {
	return (
		<BaseModal type="passwordChange">
			<PasswordChangeInputsWrapper />
		</BaseModal>
	);
}
