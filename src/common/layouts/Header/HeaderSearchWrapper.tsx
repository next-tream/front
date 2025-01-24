'use client';

import SearchBar from './HeaderSearchBar';
import SearchHistoryList from './HeaderSearchHistoryList';
import { useInputText } from '@/common/hooks/useInputText';

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
			<SearchHistoryList isVisible={!!inputText} />
		</div>
	);
}
