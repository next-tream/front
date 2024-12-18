'use client';

import { useInputText } from './hooks/useInputText';
import SearchBar from './SearchBar';
import SearchHistoryList from './SearchHistoryList';

export default function SearchWrapper() {
	const { inputText, onChangeInput, onClickReset } = useInputText();

	return (
		<div className={`w-3/12 ${inputText && 'mt-40'}`}>
			<SearchBar value={inputText} onChange={onChangeInput} onClick={onClickReset} />
			{inputText && <SearchHistoryList />}
		</div>
	);
}
