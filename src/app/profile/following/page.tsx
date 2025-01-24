'use client';

import FollowerCardContainerWrapper from './_components/FollowerCardContainerWrapper';
import { followerCard } from '@/common/constants/data';
import { useSession } from 'next-auth/react';

export default function FollowingPage() {
	const user = useSession();
	const useName = user?.data?.user.nickname;

	return (
		<div className="flexCol gap-4">
			<h3 className="font-base flex text-2xl text-mainWhite">
				<p className="font-semibold text-main">{useName}</p>님의 팔로잉
			</h3>
			<FollowerCardContainerWrapper data={followerCard} />
		</div>
	);
}
