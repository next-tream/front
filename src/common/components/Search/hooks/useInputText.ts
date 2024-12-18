'use client';

import { useState } from 'react';
import { TInputChangeEvent } from '@/common/types/handler.type';

export const useInputText = () => {
	const [inputText, setInputText] = useState('');
	let searchHistoryValues = [];

	const onChangeInput = (event: TInputChangeEvent) => {
		setInputText(event.target.value);
	};

	const onClickReset = () => {
		setInputText('');
	};

	const onClickSearch = () => {
		const searchHistoryList = localStorage.getItem('search');
		searchHistoryList && searchHistoryValues.push(...JSON.parse(searchHistoryList));
		searchHistoryValues.push(inputText);
		localStorage.removeItem('search');
		localStorage.setItem('search', JSON.stringify(searchHistoryValues));
		setInputText('');
	};

	return {
		inputText,
		onChangeInput,
		onClickReset,
		onClickSearch,
	};
};
