'use client';

import { useState } from 'react';
import { TInputChangeEvent } from '@/common/types/children.interface';

export const useInputText = () => {
	const [inputText, setInputText] = useState('');

	const onChangeInput = (event: TInputChangeEvent) => {
		setInputText(event.target.value);
	};

	const onClickReset = () => {
		setInputText('');
	};

	return {
		inputText,
		onChangeInput,
		onClickReset,
	};
};
