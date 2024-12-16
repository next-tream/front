'use client';

import { themes } from '../constants/themeSelectionButton.const';
import useThemeSelectionButton from '../hooks/useThemeSelectionButton';
import ThemeSelectionButton from './ThemeSelectionButton';

export default function ThemeSelectionButtonsWrapper() {
	const { onChangeThemeHandler, selectedThemes } = useThemeSelectionButton();

	console.log(selectedThemes);

	return (
		<div className="grid w-96 grid-cols-3 gap-x-4 gap-y-3">
			{themes.map((theme) => {
				const isSelected = selectedThemes.includes(theme.id);
				return (
					<ThemeSelectionButton
						theme={theme}
						key={theme.id}
						isSelected={isSelected}
						onChangeThemeHandler={onChangeThemeHandler}
					/>
				);
			})}
		</div>
	);
}
