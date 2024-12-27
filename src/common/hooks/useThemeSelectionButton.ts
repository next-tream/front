'use client';

import { useState } from 'react';

export default function useTagSelectionButton() {
	const [selectedTags, setSelectedTags] = useState<number[]>([]);

	const onChangeTagHandler = (id: number, checked: boolean) => {
		if (checked) {
			if (selectedTags.length < 5) {
				setSelectedTags((prev) => [...prev, id]);
			}
		} else {
			setSelectedTags((prev) => prev.filter((tag) => tag !== id));
		}
	};

	return { onChangeTagHandler, selectedTags };
}
