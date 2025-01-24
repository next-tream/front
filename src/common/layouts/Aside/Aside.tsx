import AsideMenu from '@/common/layouts/Aside/AsideMenu';
import AsideRecommendChannel from '@/common/layouts/Aside/AsideRecommendChannel';

export default function Aside() {
	return (
		<div className="flexCol fixed top-24 min-h-[90dvh] w-1/6 gap-4 border-solid border-darkGray py-5 pl-2 pr-3">
			<AsideMenu />
			<AsideRecommendChannel />
		</div>
	);
}
