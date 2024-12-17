import { Bars3Icon } from '@heroicons/react/24/solid';
import SearchBar from '@/common/components/SearchBar';
import BaseButton from '@/common/components/Buttons/BaseButton';

export default function Header() {
	return (
		<div className="border-darkGray flex flex-row items-center justify-between border-b border-solid pb-5">
			<div className="flex flex-row items-center justify-between">
				<Bars3Icon className="size-14" />
				<p className="text-5xl font-semibold">Nextream</p>
			</div>
			<SearchBar />
			<div className="w-24">
				<BaseButton className="basePrimaryBtn">로그인</BaseButton>
			</div>
		</div>
	);
}
