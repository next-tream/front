import { TInputChangeEvent } from '@/common/types/children.interface';
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface ISearchBarProps {
	value: string;
	onChange: (event: TInputChangeEvent) => void;
	onClick: () => void;
}

export default function SearchBar({ value, onChange, onClick }: ISearchBarProps) {
	return (
		<div className="border-mainWhite flex h-12 w-full justify-between rounded-2xl border px-5 py-3.5">
			<input
				type="text"
				placeholder="스트리머 게임 검색"
				value={value}
				className="w-full bg-[transparent] text-base font-medium outline-none"
				onChange={onChange}
			/>
			<div className="flex gap-1">
				{value && <XCircleIcon onClick={onClick} />}
				<MagnifyingGlassIcon />
			</div>
		</div>
	);
}
