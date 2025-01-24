import { useEffect, useState } from 'react';

import SearchHistoryFooterButton from './HeaderSearchHistoryButton';
import SearchHistoryItem from './HeaderSearchHistoryItem';

export default function SearchHistoryList({ isVisible }: { isVisible: boolean }) {
	const [searchHistoryList, setSearchHistoryList] = useState<string[]>([]);

	useEffect(() => {
		const savedSearchHistory = localStorage.getItem('search');
		if (savedSearchHistory) {
			setSearchHistoryList(JSON.parse(savedSearchHistory));
		}
	}, []);

	return (
		<div
			className={`durationInOut absolute mt-2 h-auto w-full rounded-lg bg-subBlack px-4 pt-5 ${isVisible ? 'scaleOpacityFull' : 'scaleOpacityNone'}`}
		>
			<ul className="flexCol gap-3 pb-3">
				{searchHistoryList?.map((searchItem, index) => (
					<SearchHistoryItem key={index}>{searchItem}</SearchHistoryItem>
				))}
			</ul>
			<SearchHistoryFooterButton />
		</div>
	);
}
