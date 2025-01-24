'use client';

import { followingVideo, liveVideo, recommendVideo } from '@/common/constants/data';

import MenuWrapper from '@/common/components/MenuWrapper';
import PageTitle from '@/common/components/PageTitle';
import { useSession } from 'next-auth/react';

export default function RecentVideos() {
	const user = useSession();
	const useName = user?.data?.user.nickname;

	return (
		<div className="flexCol gap-7">
			<PageTitle pointText={useName} title="님의 최근 시청 영상" />
			<MenuWrapper data={recommendVideo} />
			<MenuWrapper data={followingVideo} />
			<MenuWrapper data={liveVideo} />
		</div>
	);
}
