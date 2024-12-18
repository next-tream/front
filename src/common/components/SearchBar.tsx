'use client';
// NOTE onChange()를 만들지 말고 onChange 내에 setReset을 할당

import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';

import { useState } from 'react';

export default function SearchBar() {
	const [reset, setReset] = useState<boolean>(false);

	return (
		<div className="flex h-12 w-3/12 justify-between rounded-2xl border border-mainWhite px-5 py-3.5">
			<input
				type="text"
				placeholder="스트리머 게임 검색"
				className="w-full bg-[transparent] text-base font-medium outline-none"
				onChange={(event) => {
					setReset(!!event.target.value);
				}}
			/>
			<div className="flex gap-1">
				{reset && <XCircleIcon />}
				<MagnifyingGlassIcon />
			</div>
		</div>
	);
}
