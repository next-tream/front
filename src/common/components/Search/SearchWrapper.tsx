'use client';

import { useInputText } from './hooks/useInputText';
import SearchBar from './SearchBar';
import SearchHistoryList from './SearchHistoryList';

export default function SearchWrapper() {
	const { inputText, onChangeInput, onClickReset, onClickSearch } = useInputText();

	return (
		<div className="relative w-3/12">
			<SearchBar
				inputText={inputText}
				onChangeInput={onChangeInput}
				onClickReset={onClickReset}
				onClickSearch={onClickSearch}
			/>
			{inputText && <SearchHistoryList />}
		</div>
	);
}
