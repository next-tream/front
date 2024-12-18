import MainVideo from '@/common/components/Video/MainVideo';
import MenuContainer from '@/common/components/MenuContainer';
import RecommendVideo from '@/common/components/Video/RecommendVideo';
import { CarouselSpacing } from '@/common/components/CarouselSpacing';

export default function Home() {
	return (
		<div className="flex h-full w-full flex-col gap-5 p-5">
			<MainVideo />
			<MenuContainer menu="추천" container={<RecommendVideo />} />
			<div className="flex w-full flex-col gap-3 text-3xl font-semibold">
				<div>카테고리</div>
				<div className="w-full">
					<CarouselSpacing />
				</div>
			</div>
			<MenuContainer menu="팔로잉" container={<RecommendVideo />} />
			<MenuContainer menu="라이브" container={<RecommendVideo />} />
		</div>
	);
}
