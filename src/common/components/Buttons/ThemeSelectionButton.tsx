'use client';

import { TInputChangeEvent } from '@/common/types/handler.type';
import { IThemeSelectionButtonProps } from '@/common/types/button.interface';

export default function ThemeSelectionButton({
	theme,
	isSelected = false,
	onChangeThemeHandler,
}: IThemeSelectionButtonProps) {
	return (
		<label
			key={theme.id}
			className={`flex h-[62px] w-32 flex-col items-center justify-center rounded-xl border border-solid ${
				isSelected
					? 'border-main bg-main text-mainWhite'
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
			<div className="text-2xl">{theme.icon}</div>
			<p className="text-sm font-semibold">{theme.name}</p>
		</label>
	);
}
