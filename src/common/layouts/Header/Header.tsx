import Image from 'next/image';
import Link from 'next/link';
import SearchWrapper from '@/common/components/Search/SearchWrapper';
import UserState from '@/common/components/UserState';
import { authOptions } from '@/common/configs/nextAuth.config';
import { getServerSession } from 'next-auth';

export default async function Header() {
	const session = await getServerSession(authOptions);

	return (
		<div className="betweenCenter fixed left-0 top-0 z-30 h-24 w-full flex-row border-b border-solid border-darkGray bg-mainBlack py-5 pr-3.5">
			<Link href="/" className="between ml-4">
				<Image src={"/images/nextream.png"} alt='header' width={200} height={100}  />
			</Link>
			<SearchWrapper />
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
