import CategoryContainer from '@/common/components/CategoryContainer';
import MenuContainer from '@/common/components/MenuContainer';
import MainVideo from '@/common/components/Video/MainVideo';
import RecommendVideo from '@/common/components/Video/RecommendVideo';

export default function Home() {
	return (
		<div className="flex h-full w-full flex-col gap-5 p-5">
			<MainVideo />
			<MenuContainer menu="추천" container={<RecommendVideo />} />
			<MenuContainer
				category={true}
				menu="카테고리"
				container={
					<CategoryContainer
						title="바람의나라"
						image="/images/sample.jpg"
						watchingCount={125679}
					/>
				}
			/>
			<MenuContainer menu="팔로잉" container={<RecommendVideo />} />
			<MenuContainer menu="라이브" container={<RecommendVideo />} />
		</div>
	);
}
