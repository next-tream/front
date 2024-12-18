'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import StreamerInfoContainer from '@/common/components/StreamerInfoContainer';
import MenuItemWrapper from '@/common/components/MenuItemWrapper';
import { useToggle } from '@/common/hooks/useToggle';

export default function Aside() {
	const { isToggle, onClickToggle } = useToggle();

	return (
		<div className="border-darkGray relative flex min-h-[90dvh] w-60 flex-col border-r border-solid py-5 pl-2 pr-3">
			<div className="fixed w-48">
				<MenuItemWrapper />
				<div>
					<div className="flex flex-row items-center justify-between pt-3 text-xl">
						<p>추천 채널</p>
						<div onClick={onClickToggle}>
							{isToggle ? (
								<ChevronUpIcon className="size-6" />
							) : (
								<ChevronDownIcon className="size-6" />
							)}
						</div>
					</div>
					{isToggle && (
						<div className="flex flex-col gap-3 py-3">
							<StreamerInfoContainer name="우주최강냥이" category="고양이 라이프" />
							<StreamerInfoContainer name="뷰티풀윤정" category="뷰티/패션" />
							<StreamerInfoContainer name="대상혁" category="리그 오브 레전드" />
							<StreamerInfoContainer name="밥주세요히밥" category="먹방 크리에이터" />
							<StreamerInfoContainer name="빠니보틀" category="여행/일상" />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
