import Divider from '@/common/components/Divider';
import { REFUND_GUIDE_CONST, USAGE_GUIDE_CONST } from '@/common/constants/nextreamPoint.const';
import HistoryContentsContainer from './_components/HistoryContentsContainer';
import GuideContainer from './_components/GuideContainer';

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
