import { ITagSelectionButtonsWrapperProps } from '@/common/types/button.interface';
import TextTagButton from './TextTagButton';
import { tags } from '@/common/constants/themeSelectionButton.const';

export default function TextTagButtonsWrapper({
	isTag = false,
	selectedTags,
	onChangeTagHandler,
}: ITagSelectionButtonsWrapperProps) {
	return (
		<div className="flex gap-2">
			{tags.map((tag) => {
				const isSelected = selectedTags.includes(tag.id);
				return (
					<TextTagButton
						tag={tag}
						key={tag.id}
						isSelected={isSelected}
						isTag={isTag}
						onChangeTagHandler={onChangeTagHandler}
					></TextTagButton>
				);
			})}
		</div>
	);
}
