import Image from 'next/image';
import Link from 'next/link';
import SearchWrapper from '@/common/components/Search/SearchWrapper';
import UserState from '@/common/components/UserState';
import { authOptions } from '@/common/configs/nextAuth.config';
import { getServerSession } from 'next-auth';

export default async function Header() {
	const session = await getServerSession(authOptions);

	return (
		<div className="fixed left-0 top-0 z-30 flex h-24 w-full items-center border-b border-solid border-darkGray bg-mainBlack py-5 pr-3.5">
			<Link href="/" className="ml-4 flex-shrink-0">
				<Image src={'/images/nextream.png'} alt="header" width={200} height={100} />
			</Link>

			<div className="center mx-auto h-full w-full">
				<SearchWrapper />
			</div>

			<div className="w-24">
				{!session && (
					<Link href="/?modal=login" className="basePrimaryBtn">
						로그인
					</Link>
				)}
			</div>
			{session && <UserState userInfo={session.user} />}
		</div>
	);
}
