import Image from 'next/image';
import React, { InputHTMLAttributes } from 'react';

interface ISearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchBar({ ...rest }: ISearchBarProps) {
	return (
		<div className="border-mainWhite flex h-12 w-3/12 justify-between rounded-2xl border px-5 py-3.5">
			<input
				type="text"
				placeholder={rest.placeholder}
				className="text-mainBlack w-full bg-[transparent] text-base font-medium outline-none"
			/>
			<div className="flex gap-3">
				<Image src="/images/icon.svg" alt="아이콘" width={20} height={20} />
				<Image src="/images/icon.svg" alt="아이콘" width={20} height={20} />
			</div>
		</div>
	);
}
