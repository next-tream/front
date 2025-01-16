import { TInputChangeEvent } from '@/common/types/handler.type';
import { ITagSelectionButtonProps } from '@/common/types/button.interface';

export default function TextTagButton({
	tag,
	isSelected = false,
	onChangeTagHandler,
	isTag = false,
}: ITagSelectionButtonProps) {
	return (
		<label
			key={tag.id}
			className={`${isTag ? 'text-nowrap rounded-md border p-1.5 text-xs font-medium text-mainWhite' : 'flexColCenter h-7 w-16 rounded-xl border border-solid'} ${
				isSelected
					? 'border-main bg-main text-mainWhite'
					: isTag
						? 'border-lightGray text-mainWhite'
						: 'border-lightGray bg-subBlack text-mainWhite'
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
			<p className="text-sm font-semibold">{tag.name}</p>
		</label>
	);
}
