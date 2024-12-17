import BaseModal from '@/common/components/Modals/BaseModal';
import ThemeSelectionButtonsWrapper from '../Buttons/ThemeSelectionButtonWrapper';

export default function ThemeSelectionModal() {
	return (
		<BaseModal
			title="관심 테마 선택하기"
			description="좋아하는 테마 5개를 선택해 주세요."
			mainButtonLabel="다음"
			subButtonLabel="이전"
		>
			<ThemeSelectionButtonsWrapper />
		</BaseModal>
	);
}
