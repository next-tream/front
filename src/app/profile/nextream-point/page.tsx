import Divider from '@/common/components/Divider';
import GuideContainer from '@/app/profile/nextream-point/_components/GuideContainer';
import HistoryContentsContainer from '@/app/profile/nextream-point/_components/HistoryContentsContainer';
import { REFUND_GUIDE_CONST, USAGE_GUIDE_CONST } from '@/common/constants/nextreamPoint.const';

export default function NextreamPointPage() {
	return (
		<div className="flexCol h-full gap-7">
			<HistoryContentsContainer />
			<Divider color="mainWhite" />
			<div className="flex flex-1 gap-8">
				<GuideContainer title="이용 안내" items={USAGE_GUIDE_CONST} />
				<GuideContainer title="환불 안내" items={REFUND_GUIDE_CONST} />
			</div>
		</div>
	);
}
