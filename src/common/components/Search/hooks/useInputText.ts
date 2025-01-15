'use client';

import { FormEvent, useState } from 'react';
import { TInputChangeEvent } from '@/common/types/handler.type';
import { useSession } from 'next-auth/react';
import { requestSearchHistory } from '@/common/services/requestSearchHistory';

export const useInputText = () => {
	const [inputText, setInputText] = useState('');
	const searchHistoryValues: string[] = [];
	const isLogin = useSession();

	const onChangeInput = (event: TInputChangeEvent) => {
		setInputText(event.target.value);
	};

	const onClickReset = () => {
		setInputText('');
	};

	const onClickSearch = () => {
		if (isLogin.data) {
			requestSearchHistory(inputText);
			setInputText('');
		} else {
			const searchHistoryList = localStorage.getItem('search');
			if (searchHistoryList) {
				searchHistoryValues.push(...JSON.parse(searchHistoryList));
			}
			searchHistoryValues.push(inputText);
			localStorage.removeItem('search');
			localStorage.setItem('search', JSON.stringify(searchHistoryValues));
			setInputText('');
		}
	};

	return {
		inputText,
		onChangeInput,
		onClickReset,
		onClickSearch,
	};
};
