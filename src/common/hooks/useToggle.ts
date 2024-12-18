'use client';

import { useState } from 'react';

export const useToggle = () => {
	const [isToggle, setIsToggle] = useState(true);
	const onClickToggle = () => {
		setIsToggle((prev) => !prev);
	};

	return {
		isToggle,
		onClickToggle,
	};
};
