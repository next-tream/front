'use client';

import { useState } from 'react';

export default function useThemeSelectionButton() {
	const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

	const onChangeThemeHandler = (id: string, checked: boolean) => {
		if (checked) {
			if (selectedThemes.length < 5) {
				setSelectedThemes((prev) => [...prev, id]);
			}
		} else {
			setSelectedThemes((prev) => prev.filter((theme) => theme !== id));
		}
	};

	return { onChangeThemeHandler, selectedThemes };
}
