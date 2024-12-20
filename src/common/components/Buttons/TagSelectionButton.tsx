'use client';

import { TInputChangeEvent } from '@/common/types/handler.type';
import { ITagSelectionButtonProps } from '@/common/types/button.interface';

export default function TagSelectionButton({
	tag,
	isSelected = false,
	onChangeTagHandler,
	isTag = false,
}: ITagSelectionButtonProps) {
	return (
		<label
			key={tag.id}
			className={`${isTag ? 'text-mainWhite text-nowrap rounded-md border p-1.5 text-xs font-medium' : 'flexColCenter h-[62px] w-32 rounded-xl border border-solid'} ${
				isSelected
					? 'border-main bg-main text-mainWhite'
					: isTag
						? 'text-mainWhite border-lightGray'
						: 'border-lightGray bg-mainWhite text-subBlack'
			}`}
		>
			<input
				className="hidden"
				type="checkbox"
				id={tag.id}
				checked={isSelected}
				onChange={(event: TInputChangeEvent) =>
					onChangeTagHandler(tag.id, event.target.checked)
				}
			/>
			{!isTag && <div className="text-2xl">{tag.icon}</div>}
			<p className="text-sm font-semibold">{tag.name}</p>
		</label>
	);
}
