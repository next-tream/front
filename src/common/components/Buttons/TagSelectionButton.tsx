'use client';

import { ITagSelectionButtonProps } from '@/common/types/button.interface';
import { TInputChangeEvent } from '@/common/types/handler.type';

export default function TagSelectionButton({
	tag,
	isSelected = false,
	onChangeTagHandler,
	isTag = false,
}: ITagSelectionButtonProps) {
	return (
		<label
			key={tag.id}
			className={`${isTag ? 'text-nowrap rounded-md border p-1.5 text-xs font-medium text-mainWhite' : 'flexColCenter h-[62px] w-32 rounded-xl border border-solid'} ${
				isSelected
					? 'border-main bg-main text-mainWhite'
					: isTag
						? 'border-lightGray text-mainWhite'
						: 'border-lightGray bg-mainWhite text-subBlack'
			}`}
		>
			<input
				className="hidden"
				type="checkbox"
				id={String(tag.id)}
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
