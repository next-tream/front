import MenuContainer from '@/common/components/MenuContainer';
import PageTitle from '@/common/components/PageTitle';
import RecommendVideo from '@/common/components/Video/RecommendVideo';

export default function RecentVideos() {
	return (
		<div className="flexCol gap-7">
			<PageTitle pointText="류지승승장구" title="님의 최근 시청 영상" />
			<MenuContainer>
				<RecommendVideo />
			</MenuContainer>
		</div>
	);
}
