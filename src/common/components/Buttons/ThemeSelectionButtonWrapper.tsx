'use client';

import { themes } from '@/common/constants/themeSelectionButton.const';
import useThemeSelectionButton from '@/common/hooks/useThemeSelectionButton';
import ThemeSelectionButton from '@/common/components/Buttons/ThemeSelectionButton';

export default function ThemeSelectionButtonsWrapper({ isTag = false }: { isTag?: boolean }) {
	const { onChangeThemeHandler, selectedThemes } = useThemeSelectionButton();

	return (
		<div className={`${isTag ? 'flex gap-2' : 'grid w-96 grid-cols-3 gap-x-4 gap-y-3'}`}>
			{themes.map((theme) => {
				const isSelected = selectedThemes.includes(theme.id);
				return (
					<ThemeSelectionButton
						theme={theme}
						key={theme.id}
						isSelected={isSelected}
						onChangeThemeHandler={onChangeThemeHandler}
						isTag={isTag}
					/>
				);
			})}
		</div>
	);
}
