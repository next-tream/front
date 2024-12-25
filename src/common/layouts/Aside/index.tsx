import AsideMenu from '@/common/components/Layouts/AsideMenu';
import AsideRecommendChannel from '@/common/components/Layouts/AsideRecommendChannel';

export default function Aside() {
	return (
		<div className="border-darkGray flexCol relative min-h-[90dvh] w-1/6 border-r border-solid py-5 pl-2 pr-3">
			<div className="flexCol fixed w-[15%] gap-4">
				<AsideMenu />
				<AsideRecommendChannel />
			</div>
		</div>
	);
}
