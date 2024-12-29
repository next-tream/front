'use client';

import BaseModal from '@/common/components/Modals/BaseModal';
import TagSelectionButtonsWrapper from '@/common/components/Buttons/TagSelectionButtonsWrapper';
import { useSession } from 'next-auth/react';
import useTagSelectionButton from '@/common/hooks/useThemeSelectionButton';

export default function ThemeSelectionModal() {
	const session = useSession();
	const accessToken = session.data?.accessToken;
	const { onChangeTagHandler, selectedTags } = useTagSelectionButton();

	const onClickMainButtonHandler = async () => {
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/tag`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ tags: selectedTags }),
			});
			console.log(res);
		} catch (error) {
			alert(`태그 선택 오류 발생: ${error}`);
		}
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
