'use client';

import { TInputChangeEvent } from '@/common/types/handler.type';
import { IThemeSelectionButtonProps } from '@/common/types/button.interface';

export default function ThemeSelectionButton({
	theme,
	isSelected = false,
	onChangeThemeHandler,
	isTag = false,
}: IThemeSelectionButtonProps) {
	return (
		<label
			key={theme.id}
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
				id={theme.id}
				checked={isSelected}
				onChange={(event: TInputChangeEvent) =>
					onChangeThemeHandler(theme.id, event.target.checked)
				}
			/>
			{!isTag && <div className="text-2xl">{theme.icon}</div>}
			<p className="text-sm font-semibold">{theme.name}</p>
		</label>
	);
}
