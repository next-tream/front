'use client';

import { useToggle } from '@/common/hooks/useToggle';
import MenuItemWrapper from '@/common/components/MenuItems/MenuItemWrapper';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import StreamerInfoContainerWrapper from '@/common/components/StreamerInfoContainers/StreamerInfoContainerWrapper';

export default function Aside() {
	const { isToggle, onClickToggle } = useToggle();

	return (
		<div className="border-darkGray relative flex min-h-[90dvh] w-1/4 flex-col border-r border-solid py-5 pl-2 pr-3">
			<div className="fixed w-[18%]">
				<MenuItemWrapper />
				<div>
					<div className="betweenCenter flex-row pt-3 text-xl">
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
