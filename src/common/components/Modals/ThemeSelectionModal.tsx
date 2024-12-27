'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import TagSelectionButtonsWrapper from '@/common/components/Buttons/TagSelectionButtonsWrapper';
import useTagSelectionButton from '@/common/hooks/useThemeSelectionButton';

export default function TagSelectionModal() {
	const { onChangeTagHandler, selectedTags } = useTagSelectionButton();

	const onClickMainButtonHandler = async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/tag`, {
			method: 'POST',
			body: JSON.stringify({ tags: selectedTags }),
		});
		console.log(res.json());
	};

	return (
		<BaseModal type="tagSelection" onMainButtonClick={onClickMainButtonHandler}>
			<TagSelectionButtonsWrapper
				selectedTags={selectedTags}
				onChangeTagHandler={onChangeTagHandler}
			/>
		</BaseModal>
	);
}
