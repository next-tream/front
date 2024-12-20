'use client';

import HistoryColumnItemsWrapper from '@/app/profile/nextream-point/_components/HistoryColumnItemsWrapper';
import HistoryRowItemsWrapper from '@/app/profile/nextream-point/_components/HistoryRowItemsWrapper';
import {
	POINT_USAGE_HISTORY_COLUMNS,
	POINT_USAGE_HISTORY_SAMPLE,
	PURCHASE_HISTORY_COLUMNS,
	PURCHASE_HISTORY_SAMPLE,
} from '@/common/constants/nextreamPoint.const';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PointChargeContainer from '@/common/components/PointChargeContainer';
import NavigationContainer from './NavigationContainer';

export default function HistoryContentsContainer() {
	const [selectedMenu, setSelectedMenu] = useState<'pointUsage' | 'purchase'>('pointUsage');

	const onClickMenuHandler = (selectedMenu: 'pointUsage' | 'purchase') => {
		setSelectedMenu(selectedMenu);
	};

	return (
		<>
			<div className="flexCol gap-5">
				<NavigationContainer
					selectedMenu={selectedMenu}
					onClickMenuHandler={onClickMenuHandler}
				/>
				<div className="betweenCenter">
					<div className="center gap-1 rounded border border-mainWhite p-2 font-normal">
						<p>2024년</p>
						<ChevronDown className="size-5" />
					</div>
					<PointChargeContainer />
				</div>
			</div>

			{selectedMenu === 'pointUsage' && (
				<div className="flexCol h-full">
					<HistoryColumnItemsWrapper items={POINT_USAGE_HISTORY_COLUMNS} />
					<HistoryRowItemsWrapper items={POINT_USAGE_HISTORY_SAMPLE} />
				</div>
			)}

			{selectedMenu === 'purchase' && (
				<div className="flexCol h-full">
					<HistoryColumnItemsWrapper items={PURCHASE_HISTORY_COLUMNS} />
					<HistoryRowItemsWrapper items={PURCHASE_HISTORY_SAMPLE} />
				</div>
			)}
		</>
	);
}
