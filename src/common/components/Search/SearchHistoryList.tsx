import SearchHistoryFooterButton from './SearchHistoryFooterButton';
import SearchHistoryItem from './SearchHistoryItem';

export default function SearchHistoryList() {
	const searchHistoryList: string[] = JSON.parse(localStorage.getItem('search') || '[]');

	return (
		<div className="bg-subBlack absolute mt-2 h-auto w-full rounded-lg px-4 pt-5">
			<ul className="flexCol gap-3 pb-3">
				{searchHistoryList?.map((searchItem, index) => (
					<SearchHistoryItem key={index}>{searchItem}</SearchHistoryItem>
				))}
			</ul>
			<SearchHistoryFooterButton />
		</div>
	);
}
