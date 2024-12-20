'use client';

import { tags } from '@/common/constants/themeSelectionButton.const';
import useTagSelectionButton from '@/common/hooks/useThemeSelectionButton';
import TagSelectionButton from '@/common/components/Buttons/TagSelectionButton';

export default function TagSelectionButtonsWrapper({ isTag = false }: { isTag?: boolean }) {
	const { onChangeTagHandler, selectedTags } = useTagSelectionButton();

	return (
		<div className={`${isTag ? 'flex gap-2' : 'grid w-96 grid-cols-3 gap-x-4 gap-y-3'}`}>
			{tags.map((tag) => {
				const isSelected = selectedTags.includes(tag.id);
				return (
					<TagSelectionButton
						tag={tag}
						key={tag.id}
						isSelected={isSelected}
						onChangeTagHandler={onChangeTagHandler}
						isTag={isTag}
					/>
				);
			})}
		</div>
	);
}
