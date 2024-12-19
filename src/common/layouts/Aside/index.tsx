'use client';

import { useToggle } from '@/common/hooks/useToggle';
import MenuItemWrapper from '@/common/components/MenuItems/MenuItemWrapper';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import StreamerInfoContainerWrapper from '@/common/components/StreamerInfoContainers/StreamerInfoContainerWrapper';
import { mainMenuItems } from '@/common/constants/menuItems.const';
import Divider from '@/common/components/Divider';

export default function Aside() {
	const { isToggle, onClickToggle } = useToggle(true);

	return (
		<div className="border-darkGray relative flex min-h-[90dvh] w-1/4 flex-col border-r border-solid py-5 pl-2 pr-3">
			<div className="fixed flex w-[18%] flex-col gap-4">
				<MenuItemWrapper items={mainMenuItems} />
				<Divider color="lightGray" />
				<div>
					<div className="betweenCenter flex-row text-xl">
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
