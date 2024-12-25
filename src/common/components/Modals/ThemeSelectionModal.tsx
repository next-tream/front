import BaseModal from '@/common/components/Modals/BaseModal';
import TagSelectionButtonsWrapper from '@/common/components/Buttons/TagSelectionButtonsWrapper';

export default function TagSelectionModal() {
	return (
		<BaseModal type="tagSelection">
			<TagSelectionButtonsWrapper />
		</BaseModal>
	);
}
