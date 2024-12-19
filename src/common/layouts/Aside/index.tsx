import AsideMenu from '@/common/components/Layouts/AsideMenu';
import AsideRecommendChannel from '@/common/components/Layouts/AsideRecommendChannel';

export default function Aside() {
	return (
		<div className="border-darkGray relative flex min-h-[90dvh] w-1/4 flex-col border-r border-solid py-5 pl-2 pr-3">
			<div className="fixed flex w-[18%] flex-col gap-4">
				<AsideMenu />
				<AsideRecommendChannel />
			</div>
		</div>
	);
}
