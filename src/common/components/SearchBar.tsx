'use client';

import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function SearchBar() {
	const [reset, setReset] = useState(false);
	const onChange = (e) => {
		const value = e.target.value;
		value ? setReset(true) : setReset(false);
	};

	return (
		<div className="border-mainWhite flex h-12 w-3/12 justify-between rounded-2xl border px-5 py-3.5">
			<input
				type="text"
				placeholder="스트리머 게임 검색"
				className="w-full bg-[transparent] text-base font-medium outline-none"
				onChange={onChange}
			/>
			<div className="flex gap-1">
				{reset && <XCircleIcon />}
				<MagnifyingGlassIcon />
			</div>
		</div>
	);
}
