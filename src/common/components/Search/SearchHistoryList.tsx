import { useEffect, useState } from 'react';
import SearchHistoryFooterButton from './SearchHistoryFooterButton';
import SearchHistoryItem from './SearchHistoryItem';

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
			className={`absolute mt-2 h-auto w-full rounded-lg bg-subBlack px-4 pt-5 duration-300 ease-in-out ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top`}
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
