import { Bars3Icon } from '@heroicons/react/24/solid';
import BaseButton from '@/common/components/Buttons/BaseButton';
import SearchWrapper from '@/common/components/Search/SearchWrapper';
// import UserState from '@/common/components/UserState';

export default function Header() {
	return (
		<div className="betweenCenter sticky top-0 z-50 h-24 flex-row border-b border-solid border-darkGray bg-mainBlack py-5 pr-3.5">
			<div className="between">
				<Bars3Icon className="size-14" />
				<p className="text-5xl font-semibold">Nextream</p>
			</div>
			<SearchWrapper />
			<div className="w-24">
				<BaseButton className="basePrimaryBtn">로그인</BaseButton>
			</div>
			{/* <UserState /> */}
		</div>
	);
}
