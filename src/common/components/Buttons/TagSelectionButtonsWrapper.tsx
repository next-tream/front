import { ITagSelectionButtonsWrapperProps } from '@/common/types/button.interface';
import TagSelectionButton from '@/common/components/Buttons/TagSelectionButton';
import { tags } from '@/common/constants/themeSelectionButton.const';

export default function TagSelectionButtonsWrapper({
	isTag = false,
	selectedTags,
	onChangeTagHandler,
}: ITagSelectionButtonsWrapperProps) {
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
