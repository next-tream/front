import { Bars3Icon } from '@heroicons/react/24/solid';
import BaseButton from '@/common/components/Buttons/BaseButton';
import SearchBar from '@/common/components/SearchBar';

export default function Header() {
	return (
		<div className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-darkGray bg-mainBlack py-5">
			<div className="flex items-center justify-between">
				{/* NOTE 컴포넌트 분리 추후 eventlistener 생각 */}
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
