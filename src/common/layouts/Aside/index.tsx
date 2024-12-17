'use client';

import { ChevronUpIcon } from '@heroicons/react/24/outline';
import MenuItem from '../../components/MenuItem';
import { mainMenuItems } from '../../constants/menuItems.const';
import StreamerInfoContainer from '../../components/StreamerInfoContainer';
import { useState } from 'react';

export default function Aside() {
	const [isHidden, setIsHidden] = useState(false);

	return (
		<div className="border-darkGray flex w-56 flex-col border-r border-solid py-5 pl-2 pr-3">
			<div className="border-darkGray flex flex-col gap-6 border-b border-solid pb-5">
				{mainMenuItems.map((item) => (
					<MenuItem key={item.name} name={item.name}>
						{item.icon}
					</MenuItem>
				))}
			</div>
			<div>
				<div className="flex flex-row items-center justify-between pt-3 text-xl">
					<p>추천 채널</p>
					<ChevronUpIcon className="size-6" />
					{/* <ChevronDownIcon /> */}
				</div>
				<div className="flex flex-col gap-3 py-3">
					<StreamerInfoContainer name="우주최강냥이" category="고양이 라이프" />
					<StreamerInfoContainer name="뷰티풀윤정" category="뷰티/패션" />
					<StreamerInfoContainer name="대상혁" category="리그 오브 레전드" />
					<StreamerInfoContainer name="밥주세요히밥" category="먹방 크리에이터" />
					<StreamerInfoContainer name="빠니보틀" category="여행/일상" />
				</div>
			</div>
		</div>
	);
}
