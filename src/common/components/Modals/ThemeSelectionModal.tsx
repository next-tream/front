import BaseModal from '@/common/components/Modals/BaseModal';
import ThemeSelectionButtonsWrapper from '@/common/components/Buttons/ThemeSelectionButtonWrapper';

export default function ThemeSelectionModal() {
	return (
		<BaseModal type="themeSelection">
			<ThemeSelectionButtonsWrapper />
		</BaseModal>
	);
}
