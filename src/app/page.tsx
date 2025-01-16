import { CarouselSpacing } from '@/common/components/Carousel/CarouselSpacing';
import MainVideo from '@/common/components/Video/MainVideo';
import MenuContainer from '@/common/components/MenuContainer';
import PageTitle from '@/common/components/PageTitle';
import { followingVideo, liveVideo, recommendVideo } from '@/common/constants/data';

export default function Home() {
	return (
		<div className="flexCol h-full w-full gap-5 p-5">
			<div className="center w-full lg:h-80 2xl:h-[700px]">
				<MainVideo />
			</div>
			<PageTitle id="recommendation" title="추천" index={0} />
			<MenuContainer data={recommendVideo} />
			<div className="flexCol w-full gap-3 text-3xl font-semibold">
				<PageTitle id="category" title="카테고리" index={1} />
				<div className="w-full">
					<CarouselSpacing />
				</div>
			</div>
			<PageTitle id="following" title="팔로잉" index={2} />
			<MenuContainer data={followingVideo} />
			<PageTitle id="live" title="라이브" index={3} />
			<MenuContainer data={liveVideo} />
		</div>
	);
}
