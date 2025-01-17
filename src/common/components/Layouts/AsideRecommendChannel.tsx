'use client';

import { usePathname } from 'next/navigation';
import { useToggle } from '@/common/hooks/useToggle';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Divider from '@/common/components/Divider';
import StreamerInfoContainerWrapper from '@/common/components/StreamerInfoContainers/StreamerInfoContainerWrapper';
import { recommendVideo } from '@/common/constants/data';

export default function AsideRecommendChannel() {
	const { isToggle, onClickToggle } = useToggle(true);
	const path = usePathname();

	const PATH_LIST = ['/', '/streaming/67875d27db452996f1683f84/'];

	const onClickTest = async () => {
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/tag`, {
			method: 'POST',
		});
		const data = await response.json();
	};

	return (
		PATH_LIST.includes(path) && (
			<div className="w-ful flexCol gap-4">
				<Divider color="lightGray" />
				<div>
					<div className="betweenCenter flex-row text-xl">
						<p onClick={onClickTest}>추천 채널</p>
						<button onClick={onClickToggle}>
							{isToggle ? (
								<ChevronUpIcon className="size-6" />
							) : (
								<ChevronDownIcon className="size-6" />
							)}
						</button>
					</div>
					<StreamerInfoContainerWrapper data={recommendVideo} isVisible={isToggle} />
				</div>
			</div>
		)
	);
}
