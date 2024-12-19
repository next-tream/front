'use client';

import { useState } from 'react';

export const useToggle = (boolean: boolean) => {
	const [isToggle, setIsToggle] = useState(boolean);
	const onClickToggle = () => {
		setIsToggle((prev) => !prev);
	};

	return {
		isToggle,
		onClickToggle,
	};
};
