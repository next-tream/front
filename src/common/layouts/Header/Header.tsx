import { Bars3Icon } from '@heroicons/react/24/solid';
import BaseButton from '@/common/components/Buttons/BaseButton';
import { useInputText } from '@/common/components/Search/hooks/useInputText';
import SearchWrapper from '@/common/components/Search/SearchWrapper';

export default function Header() {
	return (
		<div className="border-darkGray bg-mainBlack sticky top-0 z-50 flex h-24 flex-row items-center justify-between border-b border-solid py-5">
			<div className="flex items-center justify-between">
				<Bars3Icon className="size-14" />
				<p className="text-5xl font-semibold">Nextream</p>
			</div>
			<SearchWrapper />
			<div className="w-24">
				<BaseButton className="basePrimaryBtn">로그인</BaseButton>
			</div>
		</div>
	);
}
