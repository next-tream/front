import { ISearchBarProps } from '@/common/types/search.interface';
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function SearchBar({ inputText, onChangeInput, onClickReset, onClickSearch }: ISearchBarProps) {
	return (
		<div className="border-mainWhite between h-12 w-full rounded-2xl border px-5 py-3.5">
			<input
				type="text"
				placeholder="스트리머 게임 검색"
				value={inputText}
				className="w-full bg-[transparent] text-base font-medium outline-none"
				onChange={onChangeInput}
			/>
			<div className="flex gap-1">
				{inputText && <XCircleIcon onClick={onClickReset} />}
				<MagnifyingGlassIcon onClick={onClickSearch} />
			</div>
		</div>
	);
}
