'use client';

import { usePathname } from 'next/navigation';
import Divider from '@/common/components/Divider';
import { useToggle } from '@/common/hooks/useToggle';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import StreamerInfoContainerWrapper from '@/common/components/StreamerInfoContainers/StreamerInfoContainerWrapper';

export default function AsideRecommendChannel() {
	const list = ['/', '/login'];
	const { isToggle, onClickToggle } = useToggle(true);
	const path = usePathname();

	return (
		list.includes(path) && (
			<div className="w-ful flexCol gap-4">
				<Divider color="lightGray" />
				<div>
					<div className="betweenCenter flex-row text-xl">
						<p>추천 채널</p>
						<button onClick={onClickToggle}>
							{isToggle ? (
								<ChevronUpIcon className="size-6" />
							) : (
								<ChevronDownIcon className="size-6" />
							)}
						</button>
					</div>
					{isToggle && <StreamerInfoContainerWrapper />}
				</div>
			</div>
		)
	);
}
