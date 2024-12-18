'use client';

import { useToggle } from '@/common/hooks/useToggle';
import MenuItemWrapper from '@/common/components/MenuItemWrapper';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import StreamerInfoContainerWrapper from '@/common/components/StreamerInfoContainer/StreamerInfoContainerWrapper';

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
					{isToggle && <StreamerInfoContainerWrapper />}
				</div>
			</div>
		</div>
	);
}
