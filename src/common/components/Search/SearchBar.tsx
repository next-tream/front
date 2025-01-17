import { ISearchBarProps } from '@/common/types/search.interface';
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function SearchBar({
	inputText,
	onChangeInput,
	onClickReset,
	onClickSearch,
}: ISearchBarProps) {
	return (
		<form>
			<div className="between h-12 w-full rounded-2xl border border-mainWhite px-5 py-3.5">
				<input
					type="text"
					placeholder="스트리머 게임 검색"
					value={inputText}
					className="w-full bg-[transparent] text-base font-medium outline-none"
					onChange={onChangeInput}
				/>
				<div className="relative flex gap-1">
					{inputText && (
						<XCircleIcon
							onClick={onClickReset}
							className="absolute right-6 top-0 flex size-5"
						/>
					)}
					<button type="submit" onClick={onClickSearch} className="relative">
						<MagnifyingGlassIcon className="absolute right-0 top-0 z-50 flex size-5" />
					</button>
				</div>
			</div>
		</form>
	);
}
