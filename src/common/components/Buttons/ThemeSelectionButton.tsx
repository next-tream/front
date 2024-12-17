'use client';

import { IThemeSelectionButtonProps } from '../types/children.interface';

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
					? 'bg-main border-main text-mainWhite'
					: 'border-lightGray text-subBlack bg-mainWhite'
			}`}
		>
			<input
				className="hidden"
				type="checkbox"
				id={theme.id}
				checked={isSelected}
				onChange={(e) => onChangeThemeHandler(theme.id, e.target.checked)}
			/>
			<div className="text-2xl">{theme.icon}</div>
			<p className="text-sm font-semibold">{theme.name}</p>
		</label>
	);
}
