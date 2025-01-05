import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/common/configs/nextAuth.config';

import { Bars3Icon } from '@heroicons/react/24/solid';
import SearchWrapper from '@/common/components/Search/SearchWrapper';
import UserState from '@/common/components/UserState';

export default async function Header() {
	const session = await getServerSession(authOptions);

	return (
		<div className="betweenCenter sticky top-0 z-30 h-24 flex-row border-b border-solid border-darkGray bg-mainBlack py-5 pr-3.5">
			<div className="between">
				<Bars3Icon className="size-14" />
				<p className="text-5xl font-semibold">Nextream</p>
			</div>
			<SearchWrapper />
			<div className="w-24">
				{!session && (
					<Link href="/login" className="basePrimaryBtn">
						로그인
					</Link>
				)}
			</div>
			{session && <UserState userInfo={session.user} />}
		</div>
	);
}
