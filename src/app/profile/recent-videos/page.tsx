'use client';

import MenuContainer from '@/common/components/MenuContainer';
import PageTitle from '@/common/components/PageTitle';
import { followingVideo, liveVideo, recommendVideo } from '@/common/constants/data';
import { useSession } from 'next-auth/react';

export default function RecentVideos() {
	const user = useSession();
	const useName = user?.data?.user.nickname;

	return (
		<div className="flexCol gap-7">
			<PageTitle pointText={useName} title="님의 최근 시청 영상" />
			<MenuContainer data={recommendVideo} />
			<MenuContainer data={followingVideo} />
			<MenuContainer data={liveVideo} />
		</div>
	);
}
