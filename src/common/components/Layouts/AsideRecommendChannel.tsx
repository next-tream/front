'use client';

import { useToggle } from '@/common/hooks/useToggle';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import StreamerInfoContainerWrapper from '@/common/components/StreamerInfoContainers/StreamerInfoContainerWrapper';

export default function AsideRecommendChannel() {
	const { isToggle, onClickToggle } = useToggle(true);

	return (
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
	);
}
