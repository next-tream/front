'use client';

import {
	POINT_USAGE_HISTORY_COLUMNS,
	POINT_USAGE_HISTORY_SAMPLE,
	PURCHASE_HISTORY_COLUMNS,
	PURCHASE_HISTORY_SAMPLE,
} from '@/common/constants/nextreamPoint.const';
import { ChevronDown } from 'lucide-react';
import PointChargeContainer from '@/common/components/PointChargeContainer';
import NavigationContainer from './NavigationContainer';
import { useToggle } from '@/common/hooks/useToggle';
import HistoryColumnItemsWrapper from './HistoryColumnItemsWrapper';
import HistoryRowItemsWrapper from './HistoryRowItemsWrapper';

export default function HistoryContentsContainer() {
	const { isToggle: isUsageView, onClickToggle } = useToggle(true);

	return (
		<>
			<div className="flexCol gap-5">
				<NavigationContainer isUsageView={isUsageView} onClickMenuHandler={onClickToggle} />
				<div className="betweenCenter">
					<div className="center gap-1 rounded border border-mainWhite p-2 font-normal">
						<p>2024년</p>
						<ChevronDown className="size-5" />
					</div>
					<PointChargeContainer />
				</div>
			</div>

			{isUsageView ? (
				<div className="flexCol h-full">
					<HistoryColumnItemsWrapper items={POINT_USAGE_HISTORY_COLUMNS} />
					<HistoryRowItemsWrapper items={POINT_USAGE_HISTORY_SAMPLE} />
				</div>
			) : (
				<div className="flexCol h-full">
					<HistoryColumnItemsWrapper items={PURCHASE_HISTORY_COLUMNS} />
					<HistoryRowItemsWrapper items={PURCHASE_HISTORY_SAMPLE} />
				</div>
			)}
		</>
	);
}
