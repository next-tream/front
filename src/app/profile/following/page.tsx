'use client';

import FollowerCardContainer from '@/app/profile/following/_components/FollowerCardContainer';
import { useSession } from 'next-auth/react';

export default function FollowingPage() {
	const user = useSession();
	const useName = user?.data?.user.nickname;

	return (
		<div className="flexCol gap-4">
			<h3 className="font-base flex text-2xl text-mainWhite">
				<p className="font-semibold text-main">{useName}</p>님의 팔로잉
			</h3>

			<div className="flexCol gap-5">
				<FollowerCardContainer
					name="샘플"
					description="나는 샘플입니다옹"
					tags={['일상', '코딩', '아자아자']}
				/>
				<FollowerCardContainer
					name="샘플"
					description="나는 샘플입니다옹"
					tags={['일상', '코딩', '아자아자']}
				/>
				<FollowerCardContainer
					name="샘플"
					description="나는 샘플입니다옹"
					tags={['일상', '코딩', '아자아자']}
				/>
			</div>
		</div>
	);
}
