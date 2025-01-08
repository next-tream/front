import AsideMenu from '@/common/components/Layouts/AsideMenu';
import AsideRecommendChannel from '@/common/components/Layouts/AsideRecommendChannel';

export default function Aside() {
	return (
		<div className="flexCol fixed top-24 min-h-[90dvh] w-1/6 gap-4 border-solid border-darkGray py-5 pl-2 pr-3">
			<AsideMenu />
			<AsideRecommendChannel />
		</div>
	);
}
